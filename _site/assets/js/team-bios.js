var data = {

    "data": [
        {
            "name": "Thomas Osborne, MD",
            "id": "Thomas-Osborne",
            "title": "Director",
            "img": "../assets/img/home/team-osborne.png",
            "description": "Thomas Osborne, MD, is the Director of VA" + "&#8217;" + "s National Center for Collaborative Healthcare Innovation (NCCHI) and Executive Director of the VA Convergence Center (VC2). His team" + "&#8217;" + "s mission is to deliver the best and most advanced healthcare solutions to our Veterans. They are collaborating throughout VA, with other government agencies, and industry as they leverage thelatest technologies such as advanced analytics, cloud computing, 5G, sensor technology, wearables, augmented reality, and virtual reality.  Dr. Osborne is the inaugural recipient of the VA Under Secretary for Health Robert L. Jesse Award for Excellence in Innovation, the Arthur S. Flemming Award for exceptional public service, as well as multiple other national awards. His work has been published in numerous medical journals and textbooks on topics such as health equity, predictive analytics, advanced technology, and the future of health care. Dr. Osborne received his medical degree from Dartmouth Medical School before completing residency and fellowship at Harvard hospitals."
        },
        {
            "name": "David Arreola",
            "id": "David-Arreola",
            "title": "Deputy Director",
            "img": "../assets/img/home/team-arreola.png",
            "description": "Meet David Arreola: Deputy Director of Operations. David is a seasoned Information Technology expert with an impressive track record spanning nearly 20 years. Beginning his career as a dedicated IT customer support representative, David" + "&#8217;" + "s passion and determination led him to ascend to the role of IT Supervisor for the VA Palo Alto Customer Support team. Eager to drive innovation in the healthcare sector, David joined the prestigious National Center for Collaborative Healthcare Innovation (NCCHI) team under the NCCHI Director Dr. Thomas F. Osborne, where he now serves as the Deputy Director of Operations. David has spearheaded groundbreaking projects, including deploying the first full spectrum 5G network, implementing apioneering 5G-enabled drone program, implementing a Smart sock fall prevention system, and developing cutting-edge holographic surgical guidance systems. Through his relentless pursuit ofexcellence, David continues to shape the future of healthcare technology, positively impacting patient care and paving the way for transformative advancements in the field."
        },
        {
            "name": "Zachary Veigulis, MS",
            "id": "Zachary-Veigulis",
            "title": "Chief Data Scientist",
            "img": "../assets/img/home/team-veigulis.png",
            "description": "Zach Veigulis is the Chief Data Scientist at the VA" + "&#8217;" + "s National Center for Collaborative Healthcare Innovation (NCCHI). His work in advanced healthcare analytics has resulted in several peer-reviewed publications in the translational medicine space. This includes work in using electronic health record data to predict disease progression, such as identifying patients at highest risk of poor outcomes for COVID-19, which led to national and international media coverage. His particular areas of expertise and interest include utilizing predictive analytics (including, but not limited to, machine learning and deep learning) to identify and improve outcomes for vulnerablepatient populations. Zach also holds an academic appointment at The University of Iowa where he teaches Data Science within the Analytics Masters program within the Tippie College of Business."
        },
        {
            "name": "Ilya Vrublevskiy, PMP",
            "id": "Ilya-Vrublevskiy",
            "title": "Technical Project Manager",
            "img": "../assets/img/home/team-vrublevskiy.png",
            "description": "Ilya Vrublevskiy, PMP certified, technical project manager with over 16 years of experience owning all stages of project lifecycle from inception through deployment to deliver projects in a timely manner and within budget. Skilled expert in streamlining projects through project planning, resource management, and creating best practices to ensure successful projects and solutions that innovate the business. Proven track record of leading global projects and optimizing processes across multiple teams by removing roadblocks, handling scope management, and facilitating technical tradeoffs to ensure the technical strategy is executed."
        },
        {
            "name": "Anna Ware",
            "id": "Anna-Ware",
            "title": "Healthcare Data Scientist",
            "img": "../assets/img/home/team-ware.png",
            "description": "Anna Ware is a Healthcare Data Scientist with the National Center for Collaborative Healthcare Innovations (NCCHI). As a data scientist, she has a passion for leveraging big data to address complex healthcare questions and improve the lives of our Veterans and their caregivers. Anna has worked as a researcher in VHA for over five years. With backgrounds in implementation science, rheumatology, public health, infectious disease control, psychology, and integrative medicine, Anna brings a multidisciplinary approach to her work and excels in leveraging data analytics to uncover valuable insights to enhance healthcare solutions for our Veterans. Anna works remotely from her home in Minnesota with her husband and many pets. In her free time, she enjoys hiking, camping, yoga, and weightlifting."
        },
        {
            "name": "Terri Blumke",
            "id": "Terri-Blumke",
            "title": "Healthcare Data Scientist",
            "img": "../assets/img/home/team-blumke.png",
            "description": "Terri Blumke is a Healthcare Data Scientist with the National Center for Collaborative HealthcareInnovations (NCCHI). She has worked in VHA for 22+ years, with a background in Long Term Careand Acute Psych Nursing, Clinical Applications and Data Analytics. She has extensive experience extracting and analyzing data from the Corporate Data Warehouse (CDW), developing local and national tools for improving clinical care. Terri" + "&#8217;" + "s passion for complex data and the potential it has to transform and innovate healthcare has led her to NCCHI were she looks forward to utilizing her skills and knowledge, continuing to make a difference in the lives of Veterans and their caregivers. Terri works remotely from Minnesota, where, in her free time, she enjoys camping, gardening, and woodworking."
        },
        {
            "name": "Peter Hoover, MS",
            "id": "Peter-Hoover",
            "title": "Healthcare Data Scientist",
            "img": "../assets/img/home/team-hoover.png",
            "description": "Peter Hoover, MS, is a Healthcare Data Scientist at the VA Palo Alto Health Care System" + "&#8217;" + "s National Center for Collaborative Healthcare Innovation (NCCHI). Within the past decade, he has supported the federal sector in the advancement of military and Veteran healthcare research. Mr. Hoover" + "&#8217;" + "s expertise lies in leveraging advanced analytical techniques to assess patterns of healthcare utilization and cost within both active-duty and Veteran populations, predicting negative patient outcomes, and evaluating treatment efficacy. As part of the 2019 FedHealthIT Innovation Award recipient team, Mr. Hoover has supported the development and implementation of clinical applications, ensuring cohesive and integrated healthcare services for these patients. Peter works remotely in Washington, DC, where, in his free time, tends to his ever-expanding houseplant collection."
        },
        {
            "name": "Brian Higgins",
            "id": "Brian-Higgins",
            "title": "Innovator",
            "img": "../assets/img/home/team-higgins.png",
            "description": ""
        }                                                              
    ]

}


data.data.forEach(bio => $('.bios-list__item-container').append("<div class='grid-col-12 bio-rows grid-row flex-row'>" + "<div class='grid-col-12 tablet:grid-col-2 desktop:grid-col-2 bios-list__img'>" + "<img alt='" + bio.name + " " + bio.title + "' src='" + bio.img + "' />" + "</div>" + "<div class='grid-col-12 tablet:grid-col-10 desktop:grid-col-10 bios-list__item padding-x-4 padding-bottom-6'>" + "<h2 id='" + bio.id + "' class='margin-top-0 margin-bottom-0 h3'>" + bio.name + "</h2>" + "<h3 class='bio__title'>" + bio.title + "</h3>" + "<p>" + bio.description + "</span>" +  "</div></div>")); 

$(".bios-list__item-container p:empty" ).remove();
$(".bios-list__item-container h3:empty" ).remove();

