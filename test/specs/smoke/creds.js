class LoginCred{
        baseUrl="http://rmgtestingserver/domain/HRM_System/";
        hrHeadUs1='pg@gmail.com';
        hrHeadPwd1='pg@123';
        hrHeadUs2='pg1@gmail.com';
        hrHeadPwd2='pg@123';
        hrHeadVisibleText='→ HR Head';

        hrOfficerUs='hrofficer@gmail.com';
        hrOffPwd='hrofficer@123';
        hrOffVisibleText='→ HR Officer';

        ranNum(){
            var rNum=Math.random(10,1000)+1*12;
            var num=Math.round(rNum);
            return num;
        }

        ranString(){
            var rstr="Princy"+this.ranNum();
            return this.ranString;
        }

}

export default new LoginCred();