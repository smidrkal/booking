var labEvents = [
  { title: 'CERT+SOC Workshop / Josef S.', start: '2020-02-04T09:00:00', end: '2020-02-04T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Compliance gathering / Eliska F.', start: '2020-01-27T12:00:00', end: '2020-01-27T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Global TKAM meeting / Michael J.', start: '2020-01-16T15:00:00', end: '2020-01-16T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Service Delivery meeting / Jaroslav N.', start: '2020-01-08T14:00:00', end: '2020-01-08T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'HR Meeting / Mia M.', start: '2020-01-14T09:00:00', end: '2020-01-14T13:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-03-19T16:00:00', end: '2020-03-19T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-03-05T16:00:00', end: '2020-03-05T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-02-20T16:00:00', end: '2020-02-20T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-02-06T16:00:00', end: '2020-02-06T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-01-23T16:00:00', end: '2020-01-23T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-01-09T16:00:00', end: '2020-01-09T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Waste Sorting Training / Bara S.', start: '2020-01-22T12:30:00', end: '2020-01-22T17:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'Waste Sorting Training / Bara S.', start: '2020-02-12T12:30:00', end: '2020-02-12T17:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH Workshop / Frantisek H.', start: '2020-01-13T12:45:00', end: '2020-01-13T17:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Day / Tom W.', start: '2020-02-03T12:00:00', end: '2020-02-03T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-03-02T12:00:00', end: '2020-03-02T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-04-01T12:00:00', end: '2020-04-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-05-04T12:00:00', end: '2020-05-04T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-06-01T12:00:00', end: '2020-06-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-07-01T12:00:00', end: '2020-07-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-08-03T12:00:00', end: '2020-08-03T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-09-01T12:00:00', end: '2020-09-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-10-01T12:00:00', end: '2020-10-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-11-02T12:00:00', end: '2020-11-02T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-12-01T12:00:00', end: '2020-12-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'X-MEN Retro / Pavol L.', start: '2020-01-07T10:00:00', end: '2020-01-07T10:45:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'Times Up / Lucie S.', start: '2020-01-07T17:30:00', end: '2020-01-07T21:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'Wanderers Refinement / Pavol L.', start: '2020-01-07T14:00:00', end: '2020-01-07T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Coffee Corner/allo IT stuff Prague Office / Misa C.', start: '2020-01-16T10:30:00', end: '2020-01-16T13:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Team Meeting / Mina B.', start: '2020-01-13T14:00:00', end: '2020-01-13T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT DPT Workshop / Katerina V.', start: '2020-03-04T15:30:00', end: '2020-03-04T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT DPT Workshop / Katerina V.', start: '2020-03-05T13:00:00', end: '2020-03-05T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Cloud - CCI Meet / Stan.', start: '2020-01-15T13:00:00', end: '2020-01-15T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Wanderers Ansible Refinement / Pavol L.', start: '2020-01-15T14:00:00', end: '2020-01-15T15:00:00', resourceId: 'C-MEETROOM' },
  { id: 001, title: 'HR Morning meeting / Tomas W.', start: '08:30:00', end: '10:30:00', dow: [ 4 ], resourceId: 'C-MEETROOM' }
]