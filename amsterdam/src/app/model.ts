export interface IEstablishment {  // FOUR ELEMENTS

  trcid: string;
  location:
  {
    name: string;
    city: string;
    zipcode: string;
    adress: string;
  };
  dates: { startdate: string; };
  urls: any;
  media: {url:any}
  
}