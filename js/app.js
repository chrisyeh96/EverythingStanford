(function(){
  var StanfordApp = angular.module('Stanford', []);
  
  StanfordApp.controller('MainController', function($scope, StanfordSitesService){
    // NOTE: only Javascript objects declared here will be accessible by child controllers
    // Primitive variable types will NOT be accessible by child controllers
    
    $scope.StanfordSites = StanfordSitesService;
  });
  
  StanfordApp.factory('StanfordSitesService', function(){
    var StanfordSites = [
      {
        name: 'Stanford Webmail',
        image: 'mail.png',
        alt: 'Stanford Webmail',
        link: 'https://webmail.stanford.edu/',
        caption: 'Check Stanford email'
      },
      {
        name: 'Axess',
        image: 'Axess.png',
        alt: 'Axess',
        link: 'https://axess.sahr.stanford.edu/group/guest',
        caption: 'Centralized academic information'
      },
      {
        name: 'Canvas',
        image: 'canvas.png',
        alt: 'Canvas',
        link: 'https://canvas.stanford.edu/',
        caption: 'Manage classes'
      },
      {
        name: 'SimpleEnroll',
        image: 'SimpleEnroll.png',
        alt: 'SimpleEnroll',
        link: 'https://axess.sahr.stanford.edu/group/guest/simpleenroll',
        caption: 'Enroll in classes'
      },
      {
        name: 'ExploreCourses',
        image: 'ExploreCourses.png',
        alt: 'ExploreCourses',
        link: 'http://explorecourses.stanford.edu/',
        caption: 'Find information about course offerings'
      },
      {
        name: 'ExploreDegrees',
        image: 'ExploreDegrees.png',
        alt: 'ExploreDegrees',
        link: 'http://exploredegrees.stanford.edu/',
        caption: 'Look up information about degree requirements'
      },
      {
        name: 'Piazza',
        image: 'Piazza.png',
        alt: 'Piazza',
        link: 'https://piazza.com/',
        caption: 'Class forum'
      },
      {
        name: 'Carta',
        image: 'carta.png',
        alt: 'Carta',
        link: 'https://carta.stanford.edu/',
        caption: 'Access official course grades and instructor evaluations'
      },
      {
        name: 'edusalsa',
        image: 'edusalsa.png',
        alt: 'edusalsa',
        link: 'https://www.edusalsa.com/',
        caption: 'Stanford course reviews'
      },
      {
        name: 'Gradescope',
        image: 'gradescope.png',
        alt: 'Gradescope',
        link: 'https://gradescope.com/',
        caption: 'Online grading'
      },
      {
        name: '25Live',
        image: '25live.png',
        alt: '25Live',
        link: 'https://scheduling.stanford.edu/',
        caption: 'Reserve rooms and spaces'
      },
      {
        name: 'Stanford Who',
        image: 'StanfordWho.png',
        alt: 'Stanford Who',
        link: 'https://stanfordwho.stanford.edu/SWApp/jsp/stanford/stanford_index.jsp',
        caption: 'Stanford directory for students, faculty, and staff'
      },
      {
        name: 'Handshake',
        image: 'handshake.png',
        alt: 'Handshake',
        link: 'https://stanford.joinhandshake.com/',
        caption: 'Job and internship listings'
      },
      {
        name: 'Laundry Alert',
        image: 'LaundryAlert.png',
        alt: 'Laundry Alert',
        link: 'https://laundryalert.stanford.edu/',
        caption: 'Check washing machine and dryer availability'
      },
      {
        name: 'Cardinal Sync',
        image: 'CardinalSync.png',
        alt: 'Cardinal Sync',
        link: 'https://orgsync.com/home/521',
        caption: 'Clubs and activities'
      },
      {
        name: 'IMLeagues',
        image: 'imleagues.png',
        alt: 'IMLeagues',
        link: 'http://www.imleagues.com/spa/intramural/acded437241c4f5788e02af570767696/home',
        caption: 'Stanford IM Sports'
      },
      {
        name: 'Syllabus',
        image: 'syllabus.png',
        alt: 'Syllabus',
        link: 'https://syllabus.stanford.edu/',
        caption: 'View syllabi from current and previous courses'
      },
      {
        name: 'Stanford Bookstore',
        image: 'bookstore.png',
        alt: 'Stanford Bookstore',
        link: 'http://stanford.bkstr.com/',
        caption: 'Purchase books, supplies, and Cardinal gear'
      },
      {
        name: 'RedZone',
        image: 'redzone.png',
        alt: 'Stanford Redzone',
        link: 'http://www.gostanford.com/',
        caption: 'Official student fan club for Stanford Athletics'
      },
      {
        name: 'Fix-It',
        image: '',
        alt: 'Stanford Fix-It',
        link: 'https://fixit.stanford.edu/',
        caption: 'Submit help tickets for facilities issues'
      },
      {
        name: 'Campus Map',
        image: 'map.png',
        alt: 'Campus Map',
        link: 'http://campus-map.stanford.edu/',
        caption: 'Searchable campus map'
      },
      {
        name: 'Stanford Libraries',
        image: 'libraries.png',
        alt: 'Stanford University Libraries',
        link: 'http://library.stanford.edu/',
        caption: 'Search Stanford libraries'
      },
      {
        name: 'Stanford What',
        image: '',
        alt: 'Stanford Network Search',
        link: 'https://web.stanford.edu/group/networking/cgi-bin/stanford-what/lookup.cgi',
        caption: 'Network info about devices connected to Stanford\'s Network.'
      }
    ];
    return StanfordSites;
  });
})();