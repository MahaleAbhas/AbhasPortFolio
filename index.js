let aboutlinks = document.getElementsByClassName('about-link');
let abouttabcontents = document.getElementsByClassName('about-tab-content');

function openTabContent(tabName)
{


    for(aboutlink of aboutlinks)
    {
        aboutlink.classList.remove("active-link");
    }

    for(abouttabcontent of abouttabcontents)
    {
        abouttabcontent.classList.remove("active-content");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-content");


}