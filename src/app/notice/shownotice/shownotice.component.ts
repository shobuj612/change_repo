import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../Services/noticeServie/notice.service';
import { NgFor, NgIf } from '@angular/common';
import { FileModel } from '../../Model/file.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shownotice',
  imports:[NgFor,RouterModule],
  templateUrl: './shownotice.component.html',
  styleUrls: ['./shownotice.component.css']
})
export class ShownoticeComponent implements OnInit {
  fileList: FileModel[] = [];

  constructor(private fileService: NoticeService) {}

  ngOnInit(): void {
    this.loadFiles();
  }
  
  viewFile(id: number): void {
  const url = `http://localhost:8080/api/notices/file/${id}`;
  window.open(url, '_blank');
}


  loadFiles() {
    this.fileService.getFiles().subscribe(files => {
      this.fileList = files;
    });
  }
}
