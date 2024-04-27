
// ----------------- time variable ------------
let h = document.querySelector('.hours')
let m = document.querySelector('.minutes')
let s = document.querySelector('.seconds')
let p = document.querySelector('.pm')
// ------------------ end time variables ---------------

//-------------------- date variable --------------------
let dt = document.querySelector('#date')
let dy = document.querySelector('.day')
let y = document.querySelector('.year')
let mn = document.querySelector('.month')

//-------------------- end  date variable --------------------


function showtimeAndDate() {
      let time = new Date()

      //----------------- time coding ------------------------
      let hours = time.getHours()
      // console.log(hours);
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()

      //----------- CONDITIONS --------------
      let pm = hours > 12 ? 'PM' : 'AM';
      hours = hours > 12 ? hours - 12 : hours;
      hours = hours == '00' ? 12 : hours
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      h.innerHTML = hours
      m.innerHTML = minutes
      s.innerHTML = seconds
      pm.innerHTML = pm
      // ------------- end time ----------------------

      // -------------------- date coding -------------

      let daysName = [
            '', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ]
      let monthsName = [
            'Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
      ]
      let date = time.getDate()
      let days = time.getDay()
      days = daysName[days]
      let month = time.getMonth()
      month = monthsName[month]
      let year = time.getFullYear()

      dt.innerHTML = `${date} -`
      dy.innerHTML = `${days} ,`
      mn.innerHTML = `${month} -`
      y.innerHTML = `${year}`

      // ----------------------- end date ----------------------
      setTimeout(showtimeAndDate, 1000)

}
showtimeAndDate()

//  ---------------------------------- end  date and time ---------------------------

// ---------------------------------- birthday finder ---------------------------------

let bmonth = document.querySelector('#months')
let birthdayForm = document.querySelector('#form');
let byear = document.querySelector('#year')
let bdate = document.querySelector('#bdate')
let printDate = document.querySelector('.birthdaydate')
let printMonth = document.querySelector('.birthdaymonth')
let printage = document.querySelector('.age')
let monthsName = [
      '', 'Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
]



birthdayForm.addEventListener('submit', (event) => {

      event.preventDefault();

      let currentTime = new Date()

      let userBirthDate = +bdate.value;
      // console.log(userBirthDate);
      let userBirthMonth = +bmonth.value;
      // userBirthMonth = monthsName[userBirthMonth]
      // console.log(userBirthMonth);
      let userBirthYear = +byear.value
      // console.log(userBirthYear);

      // --------------------------------  remaining days --------------------------------
      let remainnigDays = currentTime.getDate();
      remainnigDays = ((31 - remainnigDays) + userBirthDate);
      // console.log(remainnigDays);

      //------------------------------- remainning months -----------------------------------
      let remainingMonths = currentTime.getMonth();
      remainingMonths = remainingMonths + 1
      remainingMonths = (12 - remainingMonths);
      remainingMonths = remainingMonths + userBirthMonth
      // console.log(remainingMonths);

      printDate.innerHTML = `${remainnigDays} days `
      printMonth.innerHTML = `${remainingMonths} months -`

      let userAge = currentTime.getFullYear()
      userAge = userAge - userBirthYear 
      printage.innerHTML = userAge

})