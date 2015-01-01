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
        name: 'Coursework',
        image: 'coursework.png',
        alt: 'Coursework',
        link: 'https://coursework.stanford.edu/',
        caption: 'Manage classwork'
      },
      {
        name: 'Axess',
        image: 'Axess.png',
        alt: 'Axess',
        link: 'https://axess.sahr.stanford.edu/',
        caption: 'Centralized academic information'
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
        name: 'Stanford Who',
        image: 'StanfordWho.png',
        alt: 'Stanford Who',
        link: 'https://stanfordwho.stanford.edu/SWApp/jsp/stanford/stanford_index.jsp',
        caption: 'Search the Stanford directory for students, faculty, and staff'
      },
      {
        name: 'Cardinal Caeers',
        image: 'StanfordCDC.png',
        alt: 'Cardinal Careers',
        link: 'https://stanford-csm.symplicity.com/students/index.php?s=home',
        caption: 'Job and internship listings'
      },
      {
        name: 'Laundry Alert',
        image: 'LaundryAlert.png',
        alt: 'Laundry Alert',
        link: 'https://www.laundryalert.com/cgi-bin/STAN9568/LMPage',
        caption: 'Check washing machine and dryer availability'
      },
      {
        name: 'Stanford Printing',
        image: 'Printing.png',
        alt: 'Stanford Printing',
        link: 'https://printing.stanford.edu/',
        caption: 'Manage Stanford printing (requires connection to Stanford network or VPN)'
      },
      {
        name: 'Cardinal Sync',
        image: 'CardinalSync.png',
        alt: 'Cardinal Sync',
        link: 'https://orgsync.com/home/521',
        caption: 'Clubs and activities'
      },
      {
        name: 'Syllabus',
        image: '',
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
        name: 'CourseCycle',
        image: 'CourseCycle.png',
        alt: 'CourseCycle',
        link: 'http://www.coursecycle.com/',
        caption: 'Course reviews'
      },
      {
        name: 'Treeviews',
        image: '',
        alt: 'Treeviews',
        link: 'http://treeviews.io/',
        caption: 'Course reviews'
      },
      {
        name: 'Free Food at Stanford',
        image: 'freefoodstanford.png',
        alt: 'Free Food at Stanford',
        link: 'http://www.freefoodstanford.com/',
        caption: 'Find opportunities to get free food on campus'
      },
      {
        name: 'RedZone',
        image: 'redzone.png',
        alt: 'Stanford Redzone',
        link: 'http://www.gostanford.com/',
        caption: 'Official student fan club for Stanford Athletics'
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
      }
    ];
    return StanfordSites;
  });
})();