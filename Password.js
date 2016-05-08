//
// ES5 solution for nextPassword() and reset()
//
// class Password {
//   chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   pwdArr = [];
//
//   constructor() {
//     this.reset();
//     this.generatePwd(this.pwdArr, this.chars);
//   }
//
//   nextPassword() {
//     return this.nextPwdPointer === this.pwdArr.length
//       ? this.pwdArr[this.nextPwdPointer++]
//       : '???';
//   }
//
//   reset() {
//     this.nextPwdPointer = 0;
//   }
//
//   generatePwd(pwdArr, chars) {
//     for (let i = 0; i < 26; i++) {
//       for (let j = 0; j < 26; j++) {
//         for (let k = 0; k < 26; k++) {
//           pwdArr.push(chars[i] + chars[j] + chars[k]);
//         }
//       }
//     }
//   }
// }

module.exports = class Password {
  constructor() {
    this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.reset();
  }

  shortPassword() {
    return this.pwdGen(this.chars);
  }

  longPassword() {
    return this.pwdGen(this.chars, 25, this.chars.length);
  }

  nextPassword() {
    let next = this.gen.next();
    return !next.done ? next.value : '???';
  }

  reset() {
    this.gen = this.nextPwdGen(this.chars);
  }

  pwdGen(chars, loops = 3, range = 26) {
    let pwd = '';
    do {
      pwd += chars.charAt(Math.floor(Math.random() * range));
    } while (--loops);
    return pwd;
  }

  * nextPwdGen(chars) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        for (let k = 0; k < 26; k++) {
          yield chars[i] + chars[j] + chars[k];
        }
      }
    }
  }
}
