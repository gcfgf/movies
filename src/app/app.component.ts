import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0

  title = 'components-movie';
  img1 ='https://www.hollywoodreporter.com/wp-content/uploads/2021/09/WOFT_S1_UT_106_200210_THIJAN_00699r_v2-H-2021.jpg?w=1296&h=730&crop=1&resize=1000%2C563'
  img2 ='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6HKJf6yf2HmxDu2YG6P91S26gIADxwIfXKyyG8ng9dgSNriAF'
  img3='https://lumiere-a.akamaihd.net/v1/images/pp_beautyandthebeast_herobannermobile_19752_2cf8d29a.jpeg?region=0,0,640,480'
  img4 =
    'https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABX8EdjlxR-oKW1CgQn5eFGS_qaTLehs6_4ftvnU7WzViQXFKnR5fbU0LAvH-2ZEwQlWfOsxNNaG55miugeqFfU003VFL3rP-4a1_ltI98M8xm01FyWIiJ2VQ9CKi7i29l-86.jpg?r=152';
  img5 ='https://images.justwatch.com/backdrop/247708877/s640/meet-joe-black.%7Bformat%7D'
img6 = 'https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABW0CdL7BuY0VTI81TjA2iMRBryIJt2mUIsehZnbVH_AlD0DAXB5kE9-RJ9f-at0-SPB4PA8QbonFUC3eA-ND3puHO2m-7pab-mCDUA1QTbPbw89q3EkQfjcY9M4NM0rZEnGE.jpg?r=4f5'
img7 =  'https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZMqt09-0DljMr8VhUC4ZKWYnc6sdTZZ--qKqUoMm3cx4GmOvu-Dzx8J1SDxrcPQl_zx6NT2x476QvEWy7CrkJowJbB32FNVzWn9xVS4k7OgO-E3Agyl2d2wGS5h87RnaBQPdPSQZXH_4qa-RkwgF9fa6p4gmaG0Bqc1xL6HbOcHOkl7MhGQdbSeCz00wJ8.jpg?r=088';
img8=     'https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXmLVtUXMDD6mDV5I6VfUyjH5bAoDPlzxqsR37MxELC_G-balPjtinRm3zTY33c7IlhFRH9UGSSJUTJX_pRmuLnx4PRMXbdlao7zDwzLvLlpwukI0m_sm5Av4nagWpQ0rik2.jpg?r=488';
img9 = 'https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg'
img10='https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_mayupdate_1710_260aa445.jpeg'
img11='https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg'
img12 ='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ'
 increment(){
this.count++





}





decrement(){

if(this.count>0){
  this.count--;
}
 
}

}

