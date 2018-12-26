import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../app-services.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl('giangv', Validators.required),
        password: new FormControl('1', Validators.required),
    });
    loginMess;

    constructor(
        private authenService: AppService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.loginMess = undefined;
        if (this.loginForm.valid) {
            const user = this.loginForm.value;
            user.port = 'hust';
            this.authenService.logIn(user).subscribe(
                data => {
                    if (data.response.login) {
                        localStorage.setItem('token', data.response.token);
                        this.router.navigateByUrl('/grading');
                        // localStorage.setItem('userID', data.response.userID);
                    }
                },
                err => {
                    if (err.message === 'Unauthorized') {
                        this.loginMess = 'Tài khoản không có quyền truy cập!'
                    } else {
                        this.loginMess = 'Sai thông tin đăng nhập!'
                    }
                }
            )
        }
    }


}
