import React from 'react';

const plans = [
  {
    name: 'FREE',
    price: '$0',
    users: '✔️Single User',
    storage: '✔️50GB Storage',
    publicProjects: '✔️Unlimited Public Projects',
    communityAccess: '✔️Community Access',
    privateProjects: '✖️Unlimited Private Projects',
    phoneSupport: '✖️Dedicated Phone Support',
    subdomain: '✖️Free Subdomain',
    statusReports: '✖️Monthly Status Reports',
  },
  {
    name: 'PLUS',
    price: '$9',
    users: '✔️5 Users',
    storage: '✔️50GB Storage',
    publicProjects: '✔️Unlimited Public Projects',
    communityAccess: '✔️Community Access',
    privateProjects: '✔️Unlimited Private Projects',
    phoneSupport: '✔️Dedicated Phone Support',
    subdomain: '✔️Free Subdomain',
    statusReports: '✖️Monthly Status Reports',
  },
  {
    name: 'PRO',
    price: '$49',
    users: '✔️Unlimited Users',
    storage: '✔️50GB Storage',
    publicProjects: '✔️Unlimited Public Projects',
    communityAccess: '✔️Community Access',
    privateProjects: '✔️Unlimited Private Projects',
    phoneSupport: '✔️Dedicated Phone Support',
    subdomain: '✔️Free Subdomain',
    statusReports: '✔️Monthly Status Reports',
  },
];

const PricingPlan = ({ plan }) => (
  <div className="col-md-4">
    <div className="card pricing-plan text-center">
      <div className="card-header">
        <h5><b>{plan.name}</b></h5>
        <p>{plan.price}/month</p>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush text-start">
          <li className="list-group-item">{plan.users}</li>
          <li className="list-group-item">{plan.storage}</li>
          <li className="list-group-item">{plan.publicProjects}</li>
          <li className="list-group-item">{plan.communityAccess}</li>
          <li className="list-group-item">{plan.privateProjects}</li>
          <li className="list-group-item">{plan.phoneSupport}</li>
          <li className="list-group-item">{plan.subdomain}</li>
          <li className="list-group-item">{plan.statusReports}</li>
        </ul>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="container pricing-table">
      <div className="row">
        {plans.map((plan) => (
          <PricingPlan key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
