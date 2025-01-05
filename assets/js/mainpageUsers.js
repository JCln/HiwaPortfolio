users = () => {
    return [
        { imgSrc: 'assets/img/team/CTO.jpg', title: 'اصغر غریبی', position: 'Founder' },
        { imgSrc: 'assets/img/team/back.jpg', title: 'سپهر', position: 'Principal Full-stack Developer', linkedIn: '' },
        { imgSrc: 'assets/img/team/Android.jpg', title: 'علی', position: 'Senior Android Developer', linkedIn: '' },
        { imgSrc: 'assets/img/team/front.jpg', title: 'محمد', position: 'Senior Front-End Developer', linkedIn: '' },
        { imgSrc: 'assets/img/team/Designer.jpg', title: 'مریم', position: 'Designer', linkedIn: '' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'خانم محمدی', position: 'Accounter', linkedIn: '' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'نیلوفر', position: 'Consulter', linkedIn: '' },
        { imgSrc: 'assets/img/team/manuser.jpg', title: 'علی', position: 'Junior Back-End Developer', linkedIn: '' },
    ]
}
getTeamMemberMainPageHtml = (imgSrc, title, position) => {
    return `    
    <div class="team_box">
        <div class="avatar">
            <img src=${imgSrc} alt="">
        </div>
        <div class="info">
            <h6>
                ${title}
            </h6>
            <small>${position}</small>            
        </div>
    </div>                
    `
}
couldIt = () => {
    console.log('could it');
    
}
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;
    console.log('hi');
    
    function init() {
        couldIt();
        console.log('hi another');
        // const users = this.users();
        // console.log(users);

        // for (let index = 0; index < users.length; index++) {
        //     let teamMember = users[index];
        //     let newMemberElementMainPage = getTeamMemberMainPageHtml(teamMember.imgSrc, teamMember.title, teamMember.position, teamMember.linkedIn);

        //     let teamMainPage = document.getElementById('team-member');
        //     console.log(teamMainPage);
        //     console.log(newMemberElementMainPage);

        //     teamMainPage.insertAdjacentHTML('afterend', newMemberElementMainPage);
        // }
    }

})(window, document, undefined);