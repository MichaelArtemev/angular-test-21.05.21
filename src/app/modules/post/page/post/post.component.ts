import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { PostsService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: any;
  public form: any;
  public isEmpty = false;
  public modalMarkerSetup = false;
  public markerStatus = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //использую тут подход основанный на предзагрузке информации о посте через ресолвер
    this.route.data.subscribe(data => {
      this.post = data.post
    })

    //небольшая валидация от api
    this.form = new FormGroup({
      title: new FormControl(
        this.post.title, 
        Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')
      ),
      text: new FormControl(
        this.post.text,
        Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')
      )
    })    
  }
  public changePost() {
    const formData = {...this.form.value};
    if(formData.title === "" || formData.text === "" ){
      this.isEmpty = !this.isEmpty;
      alert("Поля не могут быть пусты");
    }else{
      //обращаюсь к апи сервиса      
      this.route.params.subscribe((params: Params) => {     
        this.postsService.changePost(formData,+params.id);
      });
      this.markerStatus = true;
    }
  }  
  public deletePost() {
    //удаляю элемент по айдишнику полученному url   
      this.route.params.subscribe((params: Params) => {     
        this.postsService.deletePost(+params.id);
      });
      this.router.navigate([""]);
      alert("Пост удален"); 
  }
  public hideModal() {
    this.modalMarkerSetup = false;
  }
  public showModal() {
    this.modalMarkerSetup = true;
  }
  public jumpBack(){
    this.router.navigate([""]);
  }

}
