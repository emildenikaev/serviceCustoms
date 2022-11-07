import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) {}

getUserDetails() {
        return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    }
    
    setDataInLocalStorage(variableName: string, data: string) {
        localStorage.setItem(variableName, data);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    clearStorage() {
        localStorage.clear();
    }
}




  // get token(): string {
  //   const expDate = new Date(localStorage.getItem('fb-token-exp'))
  //   if (new Date() > expDate) {
  //     this.logout
  //     return null
  //   }
  //   return localStorage.getItem('fb-token')
  // }

  // login(user: User): Observable<any> {
  //   user.returnSecureToken = true
  //   return this.http.post('http://188.72.108.212:8000/login', user)
  //   .pipe
  //   (tap(this.setToken),
  //   catchError(this.handleError.bind(this)));
  // }

  // logout(){
  //   this.setToken(null)
  // }

  // isAuthenticated(): boolean {
  //   return !!this.token
  // }

  // private handleError(error: HttpErrorResponse) {
  //   const {message} = error.error.error

  //   switch (message) {
  //     case 'INVALID_EMAIL':
  //       this.error$.next('Неверный email')
  //       break
  //     case 'INVALID_PASSWORD':
  //       this.error$.next('Неверный пароль')
  //       break
  //     case 'EMAIL_NOT_FOUND':
  //       this.error$.next('Email не существует')
  //       break
  //   }

  //   return throwError(error)
  // }

  // private setToken(response: any){
  //   if (response){
  //     const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
  //     localStorage.setItem('fb-token', response.idToken)
  //     localStorage.setItem('fb-token-exp', expDate.toString())
  //   } else {
  //     localStorage.clear()
  //   }

  // }
