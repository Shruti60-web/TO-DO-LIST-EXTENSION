var alarm = chrome.alarms.create("myAlarm", { delayInMinutes: 0.05, periodInMinutes: 15});

chrome.alarms.onAlarm.addListener( function (alarm)
 {
  
  
  chrome.notifications.clear('to-do notification')
  
  var notification = chrome.notifications.create(
    'to-do notification', {
      type: 'basic',
      iconUrl: 'logo.png', 

      
      title: 'REMINDER TO COMPLETE TASK!',
      message: 'See your To-Do List. Complete your pending tasks.'
    },

    function () {}

  );
  
});

