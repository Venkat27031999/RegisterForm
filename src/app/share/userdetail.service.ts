import { Injectable } from '@angular/core';
import { Userdetail } from './userdetail';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  userdetails: Userdetail[] = [{
    id: 1,
    username: 'venki',
    email: 'e@gmail.com',
    password: '12345'
  },
  {
    id: 2,
    username: 'chithra',
    email: 'venki@gmail.com',
    password: 'debfdb12345'
  },
  {
    id: 3,
    username: 'vel',
    email: 'eve4567@gmail.com',
    password: '123455678'
  }
];
create(userdetail: Userdetail) {
  const itemIndex = this.userdetails.length;
  userdetail.id = this.getnextId();
  console.log(userdetail);
  this.userdetails[itemIndex] = userdetail;
}

delete(userdetail: Userdetail) {
  this.userdetails.splice(this.userdetails.indexOf(userdetail), 1);
}

update(userdetail: Userdetail) {
  const itemIndex = this.userdetails.findIndex(item => item.id === userdetail.id);
  console.log(itemIndex);
  this.userdetails[itemIndex] = userdetail;
}

getall(): Userdetail[] {
  console.log('userdetailservice:getall');
  console.log(this.userdetails);
  return this.userdetails;
}

reorderUserDetails(userdetail: Userdetail) {
  console.log('Zur Info:', userdetail);
  this.userdetails = this.userdetails
    .map(uc => uc.id === userdetail.id ? userdetail : uc)
    .sort((a, uc) => uc.id - uc.id);
}

getUserById(id: number) {
  console.log(id);
  const itemIndex = this.userdetails.findIndex(item => item.id === id);
  console.log(itemIndex);
  return this.userdetails[itemIndex];
}

getnextId(): number {
  let highest = 0;
  this.userdetails.forEach(function (item) {
    if (highest === 0) {
      highest = item.id;
    }
    if (highest < item.id) {
      highest = item.id;
    }
  });
  return highest + 1;
}
constructor() { }
}
