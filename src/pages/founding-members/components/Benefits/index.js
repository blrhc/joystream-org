import React from 'react';
import ParticipationPayout from '../../../../assets/svg/joy-token.svg';
import MembershipStatus from '../../../../assets/svg/membership-status.svg';
import HandcraftedAvatar from '../../../../assets/svg/handcrafted-avatar.svg';
import TakePart from '../TakePart';

import './style.scss';

const BenefitsItem = ({ imageSrc, text, title }) => (
  <div className="FoundingMembersPage__benefit">
    <img src={imageSrc} alt="benefit-item" />
    <h3 className="FoundingMembersPage__benefit__title">{title}</h3>
    <p>{text}</p>
  </div>
);

const Benefits = ({ newMembers }) => (
  <div className={`FoundingMembersPage__benefits ${!newMembers ? 'FoundingMembersPage__benefits--secondary' : ''}`}>
    <div className="FoundingMembersPage__benefits__explanation">
      <h2 className="FoundingMembersPage__benefits__explanation__title">
        What is the Founding <br /> Member Program <br /> and why does it exist?
      </h2>
      <div className="FoundingMembersPage__benefits__explanation__text">
        <p>
          While Jsgenesis is the team currently building the technology behind the Joystream project, we will not be
          around forever, and we are instead entrusting the future operation of the Joystream DAO to our community
          members.
        </p>
        {/* <p className='FoundingMembersPage__benefits__explanation__quote'>
          "A founding member does have the freedom to opt out of any of these as desired."
        </p> */}
        <p>
          The Founding Member Program formally allocates JOY tokens among some of our highest quality community members
          in recognition of their contributions to the project and ensures that a sufficiently large, effective and
          motivated community of users is ready to occupy all the different roles required to run, evolve and grow the
          platform on mainnet.
        </p>
      </div>
    </div>
    <h2 className="FoundingMembersPage__benefits__title">Benefits</h2>
    <h2 className="FoundingMembersPage__benefits__alternate-title">Benefits of becoming a founding member</h2>

    <div className="FoundingMembersPage__benefits__container">
      <BenefitsItem
        imageSrc={ParticipationPayout}
        title={'Tokens'}
        text={
          'allocated tokens in the genesis block of the Joystream mainnet as a result of high quality participation and recruiting other participants'
        }
      />
      <BenefitsItem
        imageSrc={MembershipStatus}
        title={'Membership Status'}
        text={
          'special status membership assigned in genesis block, which will have a visually distinguished presentation in Pioneer and other products'
        }
      />
      <BenefitsItem
        imageSrc={HandcraftedAvatar}
        title={'Handcrafted Avatar'}
        text={
          'receive a handcrafted premium membership avatar and be honoured on the official project website and social media leading up to mainnet'
        }
      />
    </div>

    <TakePart />
  </div>
);

export default Benefits;
