---
layout: page
title: Support Desk
---

<div class="support-request">
  <p>Need help or want to book a 1-on-1? Use the form below to book time with an available instructor in the coming week:</p>
  <div class="loading">
    <img src="/public/img/loader.gif" alt="Loading...">
  </div>
  <form id="support-form">
    <div id="your_name">
      <label><span>Your name:</span>
        <input type="text" name="your_name" placeholder="First and last name" />
        <span class="required">* This field is required</span>
      </label>
    </div>
    <hr />
    <div id="request_type">
      <label>
        <span>I need support with a:</span>
        <select name="request_type"></select>
        <span class="required">* This field is required</span>
      </label>
    </div>
    <div id="follow-up-questions">
      <!-- 1-on-1 -->
      <div id="want_to_accomplish" class="1-on-1">
        <label><span>What would you like to accomplish as a result of this 1-on-1? Please be specific.</span>
          <textarea name="want_to_accomplish" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
      <!-- Bug Fix -->
      <div id="current_behaviour" class="bug-fix">
        <p><em>Please do not paste code in the fields below!</em></p>
        <label><span>Describe the current behaviour.</span>
          <textarea name="current_behaviour" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
      <div id="expected_behaviour" class="bug-fix">
        <label><span>Describe the expected behaviour.</span>
          <textarea name="expected_behaviour" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
      <div id="already_tried" class="bug-fix">
        <label><span>What have you tried to debug this issue already?</span>
          <textarea name="already_tried" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
      <!-- Portfolio Review -->
      <!-- Question -->
      <div id="need_help_with" class="question">
        <p><em>Please do not paste code in the fields below!</em></p>
        <label><span>What would you like help with? Please be specific.</span>
          <textarea name="need_help_with" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
      <div id="previous_research" class="question">
        <label><span>What research have you done on this topic already?</span>
          <textarea name="previous_research" rows="4" cols="50"></textarea>
          <span class="required">* This field is required</span>
        </label>
      </div>
    </div>
    <hr />
    <div id="time_slot">
      <p class="instructions">Pick an available time slot:</p>
      <span class="required">* This field is required</span>
    </div>
    <hr />
    <button type="submit">Book Session</button>
  </form>
</div>
