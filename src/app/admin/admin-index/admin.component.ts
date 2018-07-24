import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRouteChange(){
    this.installScripts();
  }

  installScripts(){
    let jquery = document.createElement('script');
    jquery.src = "assets/scripts/jquery-3.2.1.min.js";
    document.body.appendChild(jquery);

    let popper = document.createElement('script');
    popper.src = "assets/scripts/popper.min.js";
    document.body.appendChild(popper);

    let bootstrap = document.createElement('script');
    bootstrap.src = "assets/scripts/bootstrap.min.js";
    document.body.appendChild(bootstrap);

    let slick = document.createElement('script');
    slick.src = "assets/scripts/slick.min.js";
    document.body.appendChild(slick);

    let wow = document.createElement('script');
    wow.src = "assets/scripts/wow.min.js";
    document.body.appendChild(wow);
    
    let animsition = document.createElement('script');
    animsition.src = "assets/scripts/animsition.min.js";
    document.body.appendChild(animsition);
    
    let bootstrapprogressbar = document.createElement('script');
    bootstrapprogressbar.src = "assets/scripts/bootstrap-progressbar.min.js";
    document.body.appendChild(bootstrapprogressbar);


    let jquerywaypoints = document.createElement('script');
    jquerywaypoints.src = "assets/scripts/jquery.waypoints.min.js";
    document.body.appendChild(jquerywaypoints);

    let jquerycounterup = document.createElement('script');
    jquerycounterup.src = "assets/scripts/jquery.counterup.min.js";
    document.body.appendChild(jquerycounterup);

    let circleprogress = document.createElement('script');
    circleprogress.src = "assets/scripts/circle-progress.min.js";
    document.body.appendChild(circleprogress);

    let perfectscrollbar = document.createElement('script');
    perfectscrollbar.src = "assets/scripts/perfect-scrollbar.js";
    document.body.appendChild(perfectscrollbar);

    let Chart = document.createElement('script');
    Chart.src = "assets/scripts/Chart.bundle.min.js";
    document.body.appendChild(Chart);

    let select2 = document.createElement('script');
    select2.src = "assets/scripts/select2.min.js";
    document.body.appendChild(select2);

    let main = document.createElement('script');
    main.src = "assets/scripts/main.js";
    document.body.appendChild(main);
  }

}
