import './Clients.css';

const Clients = () => {
  const clients = [
    { 
      name: 'Codegnan', 
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQE2dFd6hMRZmw/company-logo_200_200/company-logo_200_200/0/1630626957056/codegnan_logo?e=2147483647&v=beta&t=DN4ALlhbDlbf9h0bk23HqwWMhtkTgVlKZlrgCMBPoLE' 
    },
    { 
      name: 'HP', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png' 
    },
    { 
      name: 'Tanishq', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tanishq_Logo.svg/200px-Tanishq_Logo.svg.png' 
    },
    { 
      name: 'Titan', 
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Logo_of_Titan_Company%2C_May_2018.svg/1280px-Logo_of_Titan_Company%2C_May_2018.svg.png' 
    },
    { 
      name: 'SBI', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png' 
    },
    { 
      name: 'Varma Steel', 
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHzq6F6VPi-rA/company-logo_200_200/company-logo_200_200/0/1690296235122?e=2147483647&v=beta&t=u3grZbjkyYrjVSb4mnxQV0lsA3iBLl5dXfAuoZ8s89E' 
    },
    { 
      name: 'Vijaya Diary', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPPQ0h3OZ525Za79juR8Y2w4Skzv-Fnsl2w&s' 
    },
    { 
      name: 'Indian Oil', 
      logo: 'https://toppng.com/uploads/preview/indian-oil-corporation-vector-logo-11574259324ulqkuccpqn.png' 
    },
    { 
      name: 'GEV Group', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxCLgIYQmwTfGsCWkNvUTVIYMgJ6m9FaAHw&s' 
    },
    { 
      name: 'Vertex Group', 
      logo: 'https://vertexgroupofcompanies.com/wp-content/uploads/2023/08/o1111-1.png' 
    },
    { 
      name: 'Most Edge', 
      logo: 'https://www.mostedge.com/Logos/mostedge-logo-dark-navbar.svg' 
    },
    { 
      name: 'Union Bank', 
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/union-bank-of-india-logo-png-transparent.png' 
    },
    { 
      name: 'Sony', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/200px-Sony_logo.svg.png' 
    },
    {
      name: 'Lalithaa Jewellery',
      logo: 'https://pbs.twimg.com/profile_images/1125293907871391744/OpN8ec1v.png'
    }
  ];

  // Split clients into two rows for opposite scroll directions
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7);

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">
          Trusted by leading organizations across industries
        </p>
      </div>

      <div className="clients-marquee-wrapper">
        {/* First Row - Scrolls Left */}
        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            {/* First set */}
            {row1.map((client, index) => (
              <div key={`r1a-${index}`} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {row1.map((client, index) => (
              <div key={`r1b-${index}`} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-right">
            {row2.map((client, index) => (
              <div key={`r2a-${index}`} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
            {row2.map((client, index) => (
              <div key={`r2b-${index}`} className="client-item">
                <img src={client.logo} alt={client.name} className="client-logo" loading="lazy" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <p className="clients-more">...and many more trusted partners</p>
      </div>
    </section>
  );
};

export default Clients;