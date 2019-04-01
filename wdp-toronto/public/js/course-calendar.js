$(function() {
  $("#calendar").fullCalendar({
    eventSources: [
      {
        url: "public/feeds/lessons.json",
        color: "#6B2E7F",
        textColor: "#fff"
      },
      {
        url: "public/feeds/workdays.json",
        color: "#008383",
        textColor: "#fff"
      },
      {
        url: "public/feeds/deadlines.json",
        color: "#e2231a",
        textColor: "#fff"
      },
      {
        url: "public/feeds/miscellaneous.json",
        color: "#646464",
        textColor: "#fff"
      }
    ],
    header: {
      left: "title",
      right: "today prev,next"
    },
    defaultView: "month",
    fixedWeekCount: false,
    weekends: false,
    businessHours: {
      start: "09:00",
      end: "17:00"
    }
  });
});
