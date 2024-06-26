

const Service = () => {
  return (
    <div className="main-main" id="Services">
        <h1 className="logo__nombre no-margin centrar-texto">My<span className="logo__bold"> Services</span></h1>
        <div className="contenedor column-drop-css" id="cards">
            
            <main className="card">
                <h1 className="centrar-texto">Web Deveveloper</h1>
                <section className="separacion">
                 <p>
                    A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server.A web developer contributes to the second stage of creating a website. When the entire structure and expectations are set.
                 </p>
                 
                </section>
                
                 
                <a href="https://codepen.io/your-work/" 
                className="button sin-box-shadow">View</a>
            </main>
    
            <aside className="primera card">
                <h1 className="centrar-texto">Scada Engineer</h1>
                <section className="separacion">
                 <p>
                    Supervisory Control and Data Acquisition (SCADA) systems help monitor and control operations and processes. As a SCADA engineer, your duties focus on designing, configuring, and deploying these systems in a manufacturing or other industrial environment. You configure existing systems and plan the deployment of devices, computers, and instruments that are a part of the SCADA system. A developer also performs maintenance. 
                 </p>
    
                </section>
               
                 
                <a href="https://www.ziprecruiter.com/career/Scada-Engineer/What-Is-How-to-Become#:~:text=Job%20Description%20Sample-,What%20Does%20a%20SCADA%20Engineer%20Do%3F,manufacturing%20or%20other%20industrial%20environment." 
                className="button sin-box-shadow">View</a>
            </aside>
    
            <aside className="segunda card">
                <h1 className="centrar-texto">Financial Advisor</h1>
                <section className="separacion">
                    <p>
                        I share simple tips to spend less money and save more with people looking to take control of their finances and achieve their goals. I'm here to help you find creative ways to save, manage your money wisely, and achieve your financial goals.Based on my experience I can help you manage money and know what the problem is with your finances Let's start saving together!
                     </p>
                    
                </section>
                
                 
                  
                  <a href="https://www.netflix.com/watch/81312877?trackId=255824129&tctx=0%2C0%2C153c6e17-014b-46fc-8943-9958396d328e-290998840%2C153c6e17-014b-46fc-8943-9958396d328e-290998840%7C2%2Cunknown%2C%2C%2CtitlesResults%2C%2CVideo%3A81312877%2CdetailsPagePlayButton" 
                  className="button sin-box-shadow">View</a>
            </aside>
        </div>
    </div>
   
  )
}

export default Service