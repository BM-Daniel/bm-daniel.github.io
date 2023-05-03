/*
Make the copyright year (2023) dynamic
Work on the darm mode button
*/

// VARIABLES
const copyrightYear = document.querySelector('footer .media .copyright .year')
const modeButton = document.querySelector('header div #mode')
const htmlBody = document.querySelector('body')
const skills = document.querySelectorAll('main #about .expertise-section .skills')
const footerSection = document.querySelector('footer')
const headerSection = document.querySelector('header')
const navbarLinks = document.querySelectorAll('header #navbar ul li a')


// MAKE COPYRIGHT YEAR DYNAMIC
const date = new Date()
copyrightYear.innerText = date.getFullYear()



// THEME COLORS 
const black = 'rgb(0, 0, 0)'
const black2 = 'rgb(34, 34, 34)'
const white = 'rgb(255, 255, 255)'
const ash = 'rgb(243, 242, 242)'

// MODE BUTTON FUNCTION
modeButton.addEventListener('click', () => {
    let backgrndcolor = window.getComputedStyle(htmlBody).backgroundColor
    let fontColor = window.getComputedStyle(htmlBody).color

    if (backgrndcolor === white && fontColor === black) // CHANGE FROM WHITE MODE TO DARK
    {
        htmlBody.style.color = white
        htmlBody.style.backgroundColor = black
        footerSection.style.backgroundColor = black2
        headerSection.style.backgroundColor = black
        modeButton.style.backgroundColor = white

        for(let i = 0; i < skills.length; i++)
        {
            skills[i].style.backgroundColor = black2
        }

        for(let i = 0; i < navbarLinks.length; i++)
        {
            navbarLinks[i].style.color = white
        }
    }
    else // CHANGE FROM DARK MODE TO WHITE MODE
    {
        htmlBody.style.color = black
        htmlBody.style.backgroundColor = white
        footerSection.style.backgroundColor = ash
        headerSection.style.backgroundColor = white
        modeButton.style.backgroundColor = white

        for(let i = 0; i < skills.length; i++)
        {
            skills[i].style.backgroundColor = ash
        }

        for(let i = 0; i < navbarLinks.length; i++)
        {
            navbarLinks[i].style.color = black
        }

    }
})