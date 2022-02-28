import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  content: any;
  Img:Array<any>  =  [
    {
      id:1,
      content:[
        {
          src: 'assets/img/galeria/1/1.jpg'
        }, {
          src: 'assets/img/galeria/1/2.jpg'
        }, {
          src: 'assets/img/galeria/1/3.jpg'
        }, {
          src: 'assets/img/galeria/1/4.jpg'
        }, {
          src: 'assets/img/galeria/1/5.jpg'
        }
      ]},
      {
        id:2,
        content:[
          {
            src: 'assets/img/galeria/2/1.jpg'
          }, {
            src: 'assets/img/galeria/2/2.jpg'
          }, {
            src: 'assets/img/galeria/2/3.jpg'
          }, {
            src: 'assets/img/galeria/2/4.jpg'
          }, {
            src: 'assets/img/galeria/2/5.jpg'
          }
        ]},
        {
        id:3,
        content:[
          {
            src: 'assets/img/galeria/3/1.jpg'
          }, {
            src: 'assets/img/galeria/3/2.jpg'
          }, {
            src: 'assets/img/galeria/3/3.jpg'
          }, {
            src: 'assets/img/galeria/3/4.jpg'
          }, {
            src: 'assets/img/galeria/3/5.jpg'
          }
        ]},
        {
          id:4,
          content:[
            {
              src: 'assets/img/galeria/4/1.jpg'
            }, {
              src: 'assets/img/galeria/4/2.jpg'
            }, {
              src: 'assets/img/galeria/4/3.jpg'
            }, {
              src: 'assets/img/galeria/4/4.jpg'
            }, {
              src: 'assets/img/galeria/4/5.jpg'
            }
          ]},
          {
            id:5,
            content:[
              {
                src: 'assets/img/galeria/5/1.png'
              }, {
                src: 'assets/img/galeria/5/2.png'
              }, {
                src: 'assets/img/galeria/5/3.png'
              }, {
                src: 'assets/img/galeria/5/4.png'
              }, {
                src: 'assets/img/galeria/5/5.png'
              }
            ]},
            {
              id:6,
              content:[
                {
                  src: 'assets/img/galeria/6/1.JPG'
                }, {
                  src: 'assets/img/galeria/6/2.JPG'
                }, {
                  src: 'assets/img/galeria/6/3.JPG'
                }, {
                  src: 'assets/img/galeria/6/4.JPG'
                }, {
                  src: 'assets/img/galeria/6/5.JPG'
                }
                , {
                  src: 'assets/img/galeria/6/6.JPG'
                }
                , {
                  src: 'assets/img/galeria/6/7.JPG'
                }
              ]},
              {
                id:7,
                content:[
                  {
                    src: 'assets/img/galeria/7/1.JPG'
                  }, {
                    src: 'assets/img/galeria/7/2.JPG'
                  }, {
                    src: 'assets/img/galeria/7/3.JPG'
                  }, {
                    src: 'assets/img/galeria/7/4.JPG'
                  }, {
                    src: 'assets/img/galeria/7/5.JPG'
                  }, {
                    src: 'assets/img/galeria/7/6.JPG'
                  }, {
                    src: 'assets/img/galeria/7/7.JPG'
                  }, {
                    src: 'assets/img/galeria/7/8.JPG'
                  }
                ]},
                {
                  id:8,
                  content:[
                    {
                      src: 'assets/img/galeria/8/1.JPG'
                    }, {
                      src: 'assets/img/galeria/8/2.JPG'
                    }, {
                      src: 'assets/img/galeria/8/3.JPG'
                    }, {
                      src: 'assets/img/galeria/8/4.JPG'
                    }, {
                      src: 'assets/img/galeria/8/5.JPG'
                    }, {
                      src: 'assets/img/galeria/8/6.JPG'
                    }
                  ]},
                  {
                  id:9,
                  content:[
                    {
                      src: 'assets/img/galeria/9/1.JPG'
                    }, {
                      src: 'assets/img/galeria/9/2.JPG'
                    }, {
                      src: 'assets/img/galeria/9/3.JPG'
                    }, {
                      src: 'assets/img/galeria/9/4.JPG'
                    }, {
                      src: 'assets/img/galeria/9/5.JPG'
                    }
                  ]},

                    {
                    id:10,
                    content:[
                      {
                        src: 'assets/img/galeria/10/1.JPG'
                      }, {
                        src: 'assets/img/galeria/10/2.JPG'
                      }, {
                        src: 'assets/img/galeria/10/3.JPG'
                      }, {
                        src: 'assets/img/galeria/10/4.JPG'
                      }, {
                        src: 'assets/img/galeria/10/5.JPG'
                      }, {
                        src: 'assets/img/galeria/10/6.JPG'
                      }
                    ]},

                    {
                      id:11,
                      content:[
                        {
                          src: 'assets/img/galeria/11/1.JPG'
                        }, {
                          src: 'assets/img/galeria/11/2.JPG'
                        }, {
                          src: 'assets/img/galeria/11/3.JPG'
                        }, {
                          src: 'assets/img/galeria/11/4.JPG'
                        }, {
                          src: 'assets/img/galeria/11/5.JPG'
                        }, {
                          src: 'assets/img/galeria/11/6.JPG'
                        }, {
                          src: 'assets/img/galeria/11/7.JPG'
                        }, {
                          src: 'assets/img/galeria/11/8.JPG'
                        }
                      ]},

                      {
                        id:12,
                        content:[
                          {
                            src: 'assets/img/galeria/12/1.JPG'
                          }, {
                            src: 'assets/img/galeria/12/2.JPG'
                          }, {
                            src: 'assets/img/galeria/12/3.JPG'
                          }, {
                            src: 'assets/img/galeria/12/4.JPG'
                          }, {
                            src: 'assets/img/galeria/12/5.JPG'
                          }
                        ]},

                        {
                          id:13,
                          content:[
                            {
                              src: 'assets/img/galeria/13/1.JPG'
                            }, {
                              src: 'assets/img/galeria/13/2.JPG'
                            }, {
                              src: 'assets/img/galeria/13/3.JPG'
                            }, {
                              src: 'assets/img/galeria/13/4.JPG'
                            }, {
                              src: 'assets/img/galeria/13/5.JPG'
                            }
                          ]},

                          {
                            id:14,
                            content:[
                              {
                                src: 'assets/img/galeria/14/1.JPG'
                              }, {
                                src: 'assets/img/galeria/14/2.JPG'
                              }, {
                                src: 'assets/img/galeria/14/3.JPG'
                              }, {
                                src: 'assets/img/galeria/14/4.JPG'
                              }, {
                                src: 'assets/img/galeria/14/5.JPG'
                              }, {
                                src: 'assets/img/galeria/14/6.JPG'
                              }
                            ]},

                            {
                              id:15,
                              content:[
                                {
                                  src: 'assets/img/galeria/15/1.JPG'
                                }, {
                                  src: 'assets/img/galeria/15/2.JPG'
                                }, {
                                  src: 'assets/img/galeria/15/3.JPG'
                                }, {
                                  src: 'assets/img/galeria/15/4.JPG'
                                }, {
                                  src: 'assets/img/galeria/15/5.JPG'
                                }, {
                                  src: 'assets/img/galeria/15/6.JPG'
                                }
                              ]},

                              {
                                id:16,
                                content:[
                                  {
                                    src: 'assets/img/galeria/16/1.JPG'
                                  }, {
                                    src: 'assets/img/galeria/16/2.JPG'
                                  }, {
                                    src: 'assets/img/galeria/16/3.JPG'
                                  }, {
                                    src: 'assets/img/galeria/16/4.JPG'
                                  }, {
                                    src: 'assets/img/galeria/16/5.JPG'
                                  }
                                ]}

     
  ];
  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  }

}
