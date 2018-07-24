import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import swal from 'sweetalert2';
import { } from 'sweetalert2';
import { CookieService } from '../../../services/cookie.service';

@Component({
  selector: 'app-admin-projects-index',
  templateUrl: './admin-projects-index.component.html',
  styleUrls: ['./admin-projects-index.component.css']
})
export class AdminProjectsIndexComponent implements OnInit {

  projects: Array<any>;
  pages = new Array;
  last_page: number;
  current_page = 1;
  project_count: number;

  constructor(
    private projectService: ProjectService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.getProjects(this.current_page);
    
    // this.projects.slice((this.project_count - 10), 1);
  }


  getProjects(page: number) {
    this.projectService.getProjcets(page)
      .subscribe(data => {
        this.projects = data['data'];
        let last_page = data['last_page'];
        this.current_page = data['current_page'];
        this.pages = Array.from(Array(last_page).keys());
        this.last_page = data['last_page'];
        this.project_count = data['total'];
      });

  }

  updatePage(index: number, e) {
    e.preventDefault();
    this.current_page = index;
    this.getProjects(this.current_page);
  }

  first(e) {
    e.preventDefault();
    this.getProjects(1);
  }

  last(e) {
    e.preventDefault();
    this.getProjects(this.last_page);
  }

  delete(id: number){
    swal({
      title: 'Silmək istədiyinizə əminsiniz mi?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sil',
      cancelButtonText: "Ləğv et"
    }).then((result) => {
      if (result.value) {
        
        this.projectService.delete(id)
          .subscribe(data => {
            if(data['status'] == 200){
              // this.projects.forEach((data, i) => {
              //   if(data['project_id'] == id){
              //     console.log(this.projects[i]);
              //     this.projects.splice(i, 1);
              //   }
               
              // })
              this.getProjects(this.current_page);
              swal({
                title: 'Silindi',
                type: 'success'
              });
            }else if(data['status'] == 204){
              swal(
                'Səhvlik!',
                'warning'
              );
            }
          });
      }
    })
  }

  async create() {
    const { value: formValues } = await swal({
      title: 'Proyekt yarat',
      html:
        '<input id="swal-input1" placeholder="Adı" class="swal2-input">' +
        '<input id="swal-input2" placeholder="Qiyməti" class="swal2-input">' +
        '<input id="swal-input3" placeholder="Otaq" class="swal2-input">',
      allowEnterKey: true,
      focusConfirm: false,
      confirmButtonText: 'Yarat',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('swal-input1')).value,
          (<HTMLInputElement>document.getElementById('swal-input2')).value,
          (<HTMLInputElement>document.getElementById('swal-input3')).value
        ]
      },
      allowOutsideClick: () => !swal.isLoading()
    })
    if (formValues) {
      let project = {
        project_title: formValues[0],
        project_price: formValues[1],
        project_rooms: formValues[2]
      };
      this.projectService.create(project)
        .subscribe(data => {
          if (data['status'] == 200) {
            if(this.current_page == 1){
              this.projects.pop();
              this.projects.unshift(data['data']);
            }
            const toast = (swal as any).mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            toast({
              type: 'success',
              title: 'Yaradıldı'
            });
          }
        });
    }
  }

}
