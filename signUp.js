const registerBtn = document.querySelector(".register-button")

const email = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const address = document.querySelector(".address-input")

const birthMonth = document.querySelector(".birth-month")
const birthDay = document.querySelector(".birth-day")
const birthYear = document.querySelector(".birth-year")

const contact = document.querySelector(".contact-number")

registerBtn.addEventListener("click", () => {
  
    
    const userModel = {

        email : email.value,
        password: password.value,
        address: address.value,
        birthdayObj: {
            month: birthMonth.value,
            day: birthDay.value,
            year: birthYear.value
        },
        fullBirthday: `${birthMonth.value} ${birthDay.value}, ${birthYear.value}`,
        contactNo: contact.value

    }
    // localStorage.clear()
   
    if(localStorage.getItem("users") == null){
        console.log(true)
        const users = {
            data: [userModel]
        }

        localStorage.setItem("users", JSON.stringify(users))
    }

    else {
        console.log(false)
        const usersData = JSON.parse(localStorage.getItem("users"))
        usersData.data.push(userModel)

        localStorage.setItem("users",  JSON.stringify(usersData))
    }

})