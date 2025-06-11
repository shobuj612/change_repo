import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoticeService } from '../../Services/noticeServie/notice.service';

@Component({
  selector: 'app-my-notice',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './my-notice.component.html',
  styleUrl: './my-notice.component.css'
})
export class MyNoticeComponent {
  selectedFile!: File;

  constructor(private fileService: NoticeService) {}


  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile) {
      this.fileService.uploadFile(this.selectedFile).subscribe(() => {
      });
    }
  }

  
}
