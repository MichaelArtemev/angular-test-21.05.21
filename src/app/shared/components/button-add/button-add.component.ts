import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  public inputTitle: string = '';
  public inputText: string = '';

  public form: any;

  // чекер открытия модального окна.
  public modalMarkerSetup: boolean = false;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9 \s]+$')
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9 \s]+$')
      ])
    });
  } 
  public addPost() {
    if(this.form.valid){

      //если один за одним добавить два поста то кнопка сохранить на второй раз будет 
      //активна, я не смог пофиксить через form.valid он имеет только геттер, поэтому доп проверка      
      const formData = {...this.form.value};
      if(formData.title === "" || formData.text === ""){
        alert("Заполните все поля");
      }else{

        //добавляю новый пост через апи сервиса
        const currentlength = this.postsService.posts.length;
        
        this.postsService.posts.unshift({
          title: formData.title,
          text: formData.text,
          id: currentlength+1
        });
        alert("Пост добавлен!");   
        this.modalMarkerSetup = false;

        //очищаю поля          
        this.clearForm();    
        this.router.navigate([""]);
      }        
    }         
  }
  public openModal() {
    this.modalMarkerSetup = true;
  }
  public closeModal() {
    this.modalMarkerSetup = false;
    this.clearForm();
  }
  //принудительная чистка из за особенности формы валидации
  public clearForm() {
    this.form = new FormGroup({
      title: new FormControl(''),
      text: new FormControl('')
    }); 
  }
}
