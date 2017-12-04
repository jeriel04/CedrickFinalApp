let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li className="list-group-title">J</li>
        <li><a href='#' onClick={process.push}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Push-ups</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.inc}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Incline</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
        <div className="list-group">
      <ul>
        <li className="list-group-title">O</li>
        <li><a href='#' onClick={process.shoulder}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Shoulder</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.joe}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Pec-Deck</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.barbie}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Barbell push press</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
        

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  push:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/push.jpg"}/>
            <p>A push-up (or press-up) is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms. Push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, or in some martial artsdisciplines.
</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
   inc:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/incline.jpg"}/>
            <p>This is an occasional first movement, but it can easily go anywhere from first to third in your routine. Keep in mind, though, that the later you do this movement, the less weight you'll likely be able to push.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  shoulder:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/shoulder.jpg"}/>
            <p>No two people work out exactly the same. Whether it's choice and sequence of exercises, how many sets to complete of each move, how heavy to go and reps completed, length of rest periods, or advanced training techniques and finishing moves, each lifter has his or her own workout DNA.


</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  joe:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Gym WorkOut</div>
              </div>
            </div>
            <center><img src={"img/joe.jpg"}/>
            <p> Hit the pec deck last in your chest routine for sets of 10-12. Do dropsets and partial reps, pumping out as many as you can to failure.

References



</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  barbie:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/ops.jpg"}/>
            <p>This is considered more of a strength/power movement than a bodybuilding exercise, but building more strength here can help you load up more plates in any number of other lifts. Moreover, doing movements that engage a great deal of muscle mass boost muscle-building hormones better than movements that don't.
</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Tracy:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/Tracy.jpg"}/>
            <p>Tracy Lamar McGrady Jr. (born May 24, 1979) is an American retired professional basketball player who is best known for his career in the National Basketball Association (NBA), where he played as both a shooting guard and small forward. McGrady is a seven-time NBA All-Star, seven-time All-NBA selection, two-time NBA scoring champion, and one-time winner of the NBA Most Improved Player Award. He was inducted into the Naismith Memorial Basketball Hall of Fame as part of the Class of 2017.
</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Larry:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/Larry.jpg"}/>
            <p>Larry Joe Bird
(Larry Legend, The Hick from French Lick, Kodak, The Great White Hope)
Position: Power Forward and Small Forward ▪ Shoots: Right
6-9, 220lb (206cm, 99kg)
Born: December 7, 1956 (Age: 60-361d) in West Baden, Indiana us
College: Indiana State University
High School: Springs Valley in French Lick, Indiana
Draft: Boston Celtics, 1st round (6th pick, 6th overall), 1978 NBA Draft
NBA Debut: October 12, 1979
Hall of Fame: Inducted as Player in 1998





</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Magic:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/sss.jpg"}/>
            <p>Earvin "Magic" Johnson Jr. (born August 14, 1959) is an American retired professional basketball player and current president of basketball operations of the Los Angeles Lakers of the National Basketball Association (NBA). He played point guard for the Lakers for 13 seasons. After winning championships in high school and college, Johnson was selected first overall in the 1979 NBA draft by the Lakers. He won a championship and an NBA Finals Most Valuable Player Award in his rookie season, and won four more championships with the Lakers during the 1980s. Johnson retired abruptly in 1991 after announcing that he had contracted HIV, but returned to play in the 1992 All-Star Game, winning the All-Star MVP Award. After protests from his fellow players, he retired again for four years, but returned in 1996, at age 36, to play 32 games for the Lakers before retiring for the third and final time.



</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Abdul:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/jabar.jpg"}/>
            <p>Kareem Abdul-Jabbar
Pronunciation: \kuh-REEM ab-dool juh-BAR\
Kareem Abdul-Jabbar ▪ Twitter: kaj33
(born Ferdinand Lewis Alcindor Jr.)
(Lew, Cap, Murdock, Big Fella)
Position: Center ▪ Shoots: Right
7-2, 225lb (218cm, 102kg)
Born: April 16, 1947 (Age: 70-231d) in New York, New York us
College: University of California, Los Angeles
High School: Power Memorial in New York, New York
Draft: Milwaukee Bucks, 1st round (1st pick, 1st overall), 1969 NBA Draft
NBA Debut: October 18, 1969
Hall of Fame: Inducted as Player in 1995




</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  KD:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/KD.jpg"}/>
            <p>Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). He has won an NBA championship, an NBA Most Valuable Player Award, the Bill Russell NBA Finals Most Valuable Player Award, the NBA All-Star Game Most Valuable Player Award, four NBA scoring titles, the NBA Rookie of the Year Award, and two Olympic gold medals. Durant has also been selected to seven All-NBA teams and eight NBA All-Star teams.



</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Kawhi:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">NBA Superstar</div>
              </div>
            </div>
            <center><img src={"img/Kaw.jpg"}/>
            <p>Kawhi Anthony Leonard (/kəˈwaɪ/, born June 29, 1991) is an American professional basketball player for the San Antonio Spurs of the National Basketball Association (NBA). He played two seasons of college basketball for San Diego State University before being selected with the 15th overall pick in the 2011 NBA draft by the Indiana Pacers. He was then traded to San Antonio on draft night. Leonard won an NBA Championship with the Spurs in 2014 and was named the NBA Finals Most Valuable Player. He is a two-time NBA Defensive Player of the Year, having won in 2015 and 2016, and is a two-time All-NBA First Team member.



</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
