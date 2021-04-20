import { Component, OnInit} from "@angular/core";
function hi()
{
  alert("Hello!This is my 1st Project.")
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  name = "My First Angular Project";
  ngOnInit()
  {
    hi()
  }

  getUrl(){
    return "url('https://cdn.wallpapersafari.com/27/85/YnsSaX.jpg')";
  }
  
}
