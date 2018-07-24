import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onRouteChange(){
    this.installScripts();
    this.installScripts2();
  }

  installScripts(){
    // let jquery = document.createElement('script');
    // jquery.src = "assets/scripts/jquery-3.2.1.min.js";
    // document.body.appendChild(jquery);

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

  installScripts2(){
    let jquery = document.createElement('script');
    jquery.src = "assets/scripts/ui/jquery.min.js";
    document.body.appendChild(jquery);

    let popper = document.createElement('script');
    popper.src = "assets/scripts/ui/bootstrap.min.js";
    document.body.appendChild(popper);

    let bootstrap = document.createElement('script');
    bootstrap.src = "assets/scripts/ui/smoothscroll.js";
    document.body.appendChild(bootstrap);

    let slick = document.createElement('script');
    slick.src = "assets/scripts/ui/jquery.validate.min.js";
    document.body.appendChild(slick);

    let wow = document.createElement('script');
    wow.src = "assets/scripts/ui/wow.min.js";
    document.body.appendChild(wow);
    
    let animsition = document.createElement('script');
    animsition.src = "assets/scripts/ui/jquery.stellar.min.js";
    document.body.appendChild(animsition);
    
    let bootstrapprogressbar = document.createElement('script');
    bootstrapprogressbar.src = "assets/scripts/ui/jquery.magnific-popup.js";
    document.body.appendChild(bootstrapprogressbar);


    let jquerywaypoints = document.createElement('script');
    jquerywaypoints.src = "assets/scripts/ui/owl.carousel.min.js";
    document.body.appendChild(jquerywaypoints);

    let jquerycounterup = document.createElement('script');
    jquerycounterup.src = "assets/scripts/ui/rev-slider/jquery.themepunch.tools.min.js";
    document.body.appendChild(jquerycounterup);

    let circleprogress = document.createElement('script');
    circleprogress.src = "assets/scripts/ui/rev-slider/jquery.themepunch.revolution.min.js";
    document.body.appendChild(circleprogress);

    let rev = document.createElement('script');
    rev.src = "assets/scripts/ui/rev-slider/revolution.extension.actions.min.js";
    document.body.appendChild(rev);

    let carousel = document.createElement('script');
    carousel.src = "assets/scripts/ui/rev-slider/revolution.extension.carousel.min.js";
    document.body.appendChild(carousel);

    let kenburn = document.createElement('script');
    kenburn.src = "assets/scripts/ui/rev-slider/revolution.extension.kenburn.min.js";
    document.body.appendChild(kenburn);

    let layeranimation = document.createElement('script');
    layeranimation.src = "assets/scripts/ui/rev-slider/revolution.extension.layeranimation.min.js";
    document.body.appendChild(layeranimation);

    let migration = document.createElement('script');
    migration.src = "assets/scripts/ui/rev-slider/revolution.extension.migration.min.js";
    document.body.appendChild(migration);

    let navigation = document.createElement('script');
    navigation.src = "assets/scripts/ui/rev-slider/revolution.extension.navigation.min.js";
    document.body.appendChild(navigation);

    let parallax = document.createElement('script');
    parallax.src = "assets/scripts/ui/rev-slider/revolution.extension.parallax.min.js";
    document.body.appendChild(parallax);

    let slideanims = document.createElement('script');
    slideanims.src = "assets/scripts/ui/rev-slider/revolution.extension.slideanims.min.js";
    document.body.appendChild(slideanims);

    let video = document.createElement('script');
    video.src = "assets/scripts/ui/rev-slider/revolution.extension.video.min.js";
    document.body.appendChild(video);

    let interf = document.createElement('script');
    interf.src = "assets/scripts/ui/interface.js";
    document.body.appendChild(interf);

  }


  installStyles(){

  }
}
