export class Notice {
  id?: number;
  title: string;
  publishDate: Date;
  selectedFile?: File;          // Marked optional, as file may not always be set
  filePath?: string;            // Corrected typo from 'filtePath' to 'filePath'

  constructor() {
    this.title = '';
    this.publishDate = new Date();
    this.filePath = '';
  }
}
