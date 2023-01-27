// Variables for datepicker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// Variables for printing values

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change', function() {
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US',options);

    choseDate.innerHTML = DOB;


    var miliSecondsBtwDOB = Date.parse(DOB);
    var miliSecondsBtwNow = Date.now();

    var ageInMiliseconds = miliSecondsBtwNow - miliSecondsBtwDOB;

    var miliSeconds = ageInMiliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;
    var year = day*365;

    // calculation

    var years = Math.round(miliSeconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);

    // print values in page

    ageYear.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = hours;
    ageSeconds.innerHTML = seconds;
    ageMiliSeconds.innerHTML = miliSeconds;

    document.querySelector('.age-calc').classList.add('expand');
});