export interface Blog {
  author: string;
  imageSource?: string;
  readingTime: number;
  blogSource?: string; // optional ... FOR NOW!
  headerText: string;
  content?: string; // optional as we may use this for the whats new section and add content later.
  title?: string;
  //Yes this makes sense dont question me right now pls 0_o
}
