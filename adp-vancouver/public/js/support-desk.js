/**
 * Constants
 */
const BOARD_ID = "5a4a8113307deb77460b2644";

/**
 * Helpers
 */
const orderCardsByTime = function(cards) {
  return cards
    .filter(function(card) {
      return card.members.length;
    })
    .slice()
    .sort(function(a, b) {
      return new Date(a.due).getTime() - new Date(b.due).getTime();
    })
    .reduce(function(acc, curr) {
      const dayExists = acc.find(function(day) {
        return day.title === curr.list.name;
      });
      dayExists
        ? dayExists.cards.push(curr)
        : acc.push({ title: curr.list.name, cards: [curr] });
      return acc;
    }, [])
    .sort(function(a, b) {
      return (
        new Date(a.cards[0].due).getTime() - new Date(b.cards[0].due).getTime()
      );
    });
};

const getLabelByName = function(labels, labelName) {
  return labels.find(function(label) {
    return label.name === labelName;
  });
};

const filterAndOrderLabels = function(labels) {
  return labels
    .filter(function(label) {
      return (
        label.name !== "App Dev" &&
        label.name !== "Booked" &&
        label.name !== "Web Dev"
      );
    })
    .slice()
    .sort(function(a, b) {
      return a.name > b.name;
    });
};

const getCards = function(boardId) {
  return Trello.get("/search", {
    query: 'due:week label:"App Dev" -label:Booked',
    board_fields: "all",
    cards_limit: 200,
    card_list: true,
    card_members: true,
    idBoards: boardId,
    members_limit: 1
  });
};

const getLabels = function(boardId) {
  return Trello.get(`/boards/${boardId}/labels`);
};

const updateCard = function(cardId, name, idLabels) {
  return Trello.put(`/cards/${cardId}`, {
    name: name,
    idLabels: idLabels
  });
};

const addCommentToCard = function(cardId, text) {
  return Trello.post(`/cards/${cardId}/actions/comments`, {
    text: text
  });
};

const validateFields = function(values, requestType) {
  let errors = [];

  for (name in values) {
    const value = values[name].trim();

    if (!value && (name === "your_name" || name === "request_type")) {
      errors.push(name);
    }

    if (requestType === "1-on-1" && !value && name === "want_to_accomplish") {
      errors.push(name);
    }

    if (
      requestType === "bug-fix" &&
      !value &&
      (name === "expected_behaviour" ||
        name === "current_behaviour" ||
        name === "already_tried")
    ) {
      errors.push(name);
    }

    if (
      requestType === "question" &&
      !value &&
      (name === "need_help_with" || name === "previous_research")
    ) {
      errors.push(name);
    }
  }

  if (!values.hasOwnProperty("time_slot")) {
    errors.push("time_slot");
  }

  return errors;
};

const formatCommentString = function(values) {
  let commentString = "";

  if (values.want_to_accomplish.trim()) {
    commentString +=
      "**Wants to accomplish:**\n\n" + values.want_to_accomplish + "\n";
  }
  if (values.current_behaviour.trim()) {
    commentString +=
      "**Current behaviour:**\n\n" + values.current_behaviour + "\n";
  }
  if (values.expected_behaviour.trim()) {
    commentString +=
      "**Expected behaviour:**\n\n" + values.expected_behaviour + "\n";
  }
  if (values.already_tried.trim()) {
    commentString += "**Already tried:**\n\n" + values.already_tried + "\n";
  }
  if (values.need_help_with.trim()) {
    commentString += "**Needs help with:**\n\n" + values.need_help_with + "\n";
  }
  if (values.previous_research.trim()) {
    commentString +=
      "**Needs help with:**\n\n" + values.previous_research + "\n";
  }

  return commentString;
};

/**
 * Do Stuff
 */
$(function() {
  // Some generic variables
  const $loading = $(".loading");
  const $supportRequest = $(".support-request");
  const $supportForm = $("#support-form");

  /**
   * Get initial data
   */
  const cardData = getCards(BOARD_ID);
  const labelData = getLabels(BOARD_ID);

  $.when(cardData, labelData).done(function(cards, labels) {
    const formattedCards = orderCardsByTime(cards[0].cards);

    // Hide loader
    $loading.hide();

    if (formattedCards.length) {
      const filteredLabels = filterAndOrderLabels(labels[0]);

      // Create some hidden input mark-up
      const hiddenInputs = `<input type="hidden" name="booked_label" value="${
        getLabelByName(labels[0], "Booked").id
      }"><input type="hidden" name="course_label" value="${
        getLabelByName(labels[0], "App Dev").id
      }">`;

      // Create select option mark-up
      const typeOptions = filteredLabels.reduce(function(acc, curr) {
        acc += `<option value="${curr.id}" data-type=${curr.name
          .replace(/\s+/g, "-")
          .toLowerCase()}>
            ${curr.name}
          </option>`;
        return acc;
      }, '<option value="">-- Select a request type --</option>');

      // Create radio input mark-up
      const timeInputs = formattedCards.reduce(function(acc, curr) {
        acc += `<p class="day">${curr.title}</p>`;

        curr.cards.forEach(function(card) {
          const withMember = card.members.length
            ? `with ${card.members[0].fullName}`
            : "";
          acc += `<label><input type="radio" name="time_slot" data-time="${
            card.name
          }" data-instructor="${withMember}" value="${card.id}"><span>${
            card.name
          } ${withMember}</span></label>`;
        });

        return acc;
      }, "");

      // Add fields
      $("#request_type select").append(typeOptions);
      $("#time_slot").append(timeInputs);
      $supportForm.prepend(hiddenInputs);

      // Show form
      $supportRequest.children("p").fadeIn();
      $supportForm.fadeIn();
    } else {
      $supportRequest.children("p").hide();
      $supportRequest
        .append(
          "Sorry! There are no time slots available in the next week. Please check back again soon, or talk to an instructor."
        )
        .fadeIn();
    }
  });

  /**
   * Hide non-applicable fields
   */
  $("#request_type select").change(function() {
    $("#follow-up-questions")
      .children()
      .slideUp("fast")
      .find("textarea")
      .val("");

    if (
      $(this)
        .find(":selected")
        .is("[data-type='1-on-1']")
    ) {
      $(".1-on-1").slideDown("slow");
    } else if (
      $(this)
        .find(":selected")
        .is("[data-type='bug-fix']")
    ) {
      $(".bug-fix").slideDown("slow");
    } else if (
      $(this)
        .find(":selected")
        .is("[data-type='question']")
    ) {
      $(".question").slideDown("slow");
    }
  });

  /**
   * Submit the form
   */
  $supportForm.submit(function(event) {
    event.preventDefault();
    const $checkedRadio = $('[name="time_slot"]:checked');
    const time = $checkedRadio.data("time");
    const instructor = $checkedRadio.data("instructor");
    const requestType = $('[name="request_type"]')
      .find("option:selected")
      .data("type");
    let values = {};

    // Clear up old invalid fields
    $(this)
      .find(".invalid")
      .removeClass();

    // Get form values
    $.each($(this).serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    // Validate the fields
    let errors = validateFields(values, requestType);

    if (errors.length) {
      $.each(errors, function(i, error) {
        $(`#${error}`).addClass("invalid");
      });
      return false; // BAIL!
    }

    // Hide loader, show form
    $supportForm.hide();
    $supportRequest.children("p").hide();
    $loading.fadeIn();

    // Update card
    const card = updateCard(
      values.time_slot,
      `${time} with ${values.your_name}`,
      [values.booked_label, values.course_label, values.request_type]
    );

    // Create comment string based on values, then create comment
    let cardComment;
    let commentString = formatCommentString(values);

    if (commentString) {
      cardComment = addCommentToCard(values.time_slot, commentString);
    }

    // On response...
    $.when(card, cardComment).done(function(cardResponse, commentResponse) {
      $loading.hide();

      if (cardResponse[1] === "success") {
        const updatedCard = cardResponse[0];
        const sessionLabel = updatedCard.labels.find(function(label) {
          return (
            label.name !== "App Dev" &&
            label.name !== "Booked" &&
            label.name !== "Web Dev"
          );
        });

        let successMessage = `<p>Your session has been booked. Please make a note of the details:</p>`;
        successMessage += `<p><strong>${moment(updatedCard.due).format(
          "dddd, MMMM D [at] h:mm A"
        )} → ${sessionLabel.name} ${instructor}</p></strong>`;
        successMessage += `<p><em>If you need to reschedule or cancel your session, please contact your instructor directly, and as soon as possible.</em></p>`;

        $supportRequest.append(successMessage);
      } else {
        $supportRequest.append(
          `<p>Something went wrong. Please try booking your session again.</p>`
        );
      }
    });
  });
});
