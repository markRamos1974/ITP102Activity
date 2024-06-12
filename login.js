const loginBtn = document.querySelector(".login-button")

const email = document.querySelector(".email-input")
const password = document.querySelector(".password-input")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const userData = JSON.parse(localStorage.getItem("users")).data
    let accFound = false
    
    userData.forEach(account => {
        if(email.value == account.email && password.value == account.password){
            accFound = true

            const flights = {
                data: [
                    {
                        flightId: "AB1234",
                        from: "Philippines",
                        to: "Hongkong",
                        class: "A",
                        seat: "01A",
                        bordingTime: "12:45",
                        price: 10000,
                        img_url: "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Hong-Kong/Hong-Kong-city/112086_SCN_HongKong_iStock466733790_Z8C705.jpg?tr=w-1200%2Cfo-auto"

                    },
                    {
                        flightId: "AB5674",
                        from: "Philippines",
                        to: "Hawaii",
                        class: "B",
                        seat: "012",
                        bordingTime: "15:45",
                        price: 10000,
                        img_url: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },
                    {
                        flightId: "AB789",
                        from: "Philippines",
                        to: "Japan",
                        class: "A",
                        seat: "011",
                        bordingTime: "3:45",
                        price: 10000,
                        img_url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },
                ]
            }
            
            if(localStorage.getItem("flights") == null) {
                localStorage.setItem("flights", JSON.stringify(flights))
            }

            window.location.href = "/dashboard.html"
        }
    });

    if(!accFound){
        alert("No account found")
    }
    
})