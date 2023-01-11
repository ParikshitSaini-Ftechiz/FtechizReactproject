import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import PaidIcon from "@mui/icons-material/Paid";
import ShopIcon from "@mui/icons-material/Shop";
import Why_To_Choose from "./Why_To_Choose";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SyncIcon from "@mui/icons-material/Sync";
import MessageIcon from "@mui/icons-material/Message";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import DescriptionIcon from '@mui/icons-material/Description';
import CollectionsIcon from '@mui/icons-material/Collections';
import GroupsIcon from '@mui/icons-material/Groups';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AppsIcon from '@mui/icons-material/Apps';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LockIcon from '@mui/icons-material/Lock';
import ComputerIcon from '@mui/icons-material/Computer';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import Why_To_Choose_3col from "./Why_To_Choose_3col";

export const Why_To_Choose_android = () => {
     
  const icon = {
    icon1: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>
    ),
    icon2: (
      <ShopIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon3: (
      <PaidIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon4: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>
    ),
    icon5: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fab fa-rocketchat"
      ></i>
    ),
    icon6: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-pencil-alt"
      ></i>
    ),
    icon7: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-users-cog"
      ></i>
    ),
    icon8: (
      <SearchIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
  };
  const title = {
    title1: " Skilled Android Developers  ",
    title2: " Play Store Submission    ",
    title3: "  Cost-effective solutions   ",
    title4: "IP Rights Protection   ",
    title5: " Smooth Communication   ",
    title6: " Robust Architecture  ",
    title7: "   Post Launch Maintenance ",
    title8: "   Complete Transparency   ",
  };

  return <Why_To_Choose icon={icon} title={title} />
}
export const Why_To_Choose_blockchain = () => {

  const icon = {
    icon1: (
      <SyncIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon2: (
      <ViewInArIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon3: (
      <MessageIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon4: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-users"></i>
    ),
    icon5: (
      <QuestionAnswerIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon6: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-project-diagram"
      ></i>
    ),
    icon7: <i class="fa-solid fa-gears"></i>,
    icon8: <i class="fa-solid fa-hand-holding-dollar"></i>,
  };
  const title = {
    title1: "   360° Holistic Approach ",
    title2: "    Use of Latest Technologies   ",
    title3: "  Dynamic Engagement ",
    title4: "  Center of Excellence Team   ",
    title5: "  Client Association at Each Stage  ",
    title6: "   Agile Execution Approach  ",
    title7: "    Support & Maintenance    ",
    title8: "   Cost-effective Solutions   ",
  };

    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_cloud = () => {
  
  const icon = {
    icon1: "",
    icon2: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-server"
        style={{ fontSize: "4rem", color: "white", marginBottom: "-.8rem" }}
      ></i>
    ),
    icon3: 
      <img src="./images/cloud_service.png"  style={{ width: "5.2rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon4: (
      <PaidIcon
        style={{ fontSize: "4.8rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon5: <img src="./images/cloud.png"  style={{ width: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon6: (
      <SettingsSystemDaydreamIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon7: <i class="fa fa-lock" aria-hidden="true" style={{ fontSize: "4rem", color: "white", marginBottom: "-.8rem" }}></i>,
    icon8: <i class="fa-solid fa-hand-holding-dollar" style={{ fontSize: "4rem", color: "white", marginBottom: "-.8rem" }}></i>,
  };

  const title = {
    title1: " Agile Approach model",
    title2: " Multiple Service Models ",
    title3: " Strong knowledge of Cloud Services ",
    title4: "  Cost Effective Solutions ",
    title5: " A pool of expert Cloud Developers   ",
    title6: " Cloud Platforms of Your Choice ",
    title7: "   Secure Development ",
    title8: " Post Development Services ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_flutter = () => {
  // icons //
  const icon = {
    icon1:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>,
    icon2: <ManageHistoryIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />, 
    icon3:   <ShopIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon4:<ComputerIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon5: <i
    aria-hidden="true"
    class="elementkit-infobox-icon fab fa-rocketchat"
  ></i>,
    icon6: <LockIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon7:   <SearchIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon8:  <i
    aria-hidden="true"
    class="elementkit-infobox-icon fas fa-users-cog"
  ></i>,
  };
  const title = {
    title1: "Experienced Developers ",
    title2: "  Timely Delivery ",
    title3: " Cost-effective solutions",
    title4: "  Feasible Interface     ",
    title5: "     Flexible Engagement      ",
    title6: "     Enhanced Security    ",
    title7: "  100% Transparency    ",
    title8: " Technical Support   ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_ios = () => {
  // icons //
  const icon = {
    icon1:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>,
    icon2: <i class="fa-brands fa-app-store-ios"
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  ></i>, 
  icon3: <PaidIcon
  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
/>,
  icon4:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
    icon5: <i
    aria-hidden="true"
    class="elementkit-infobox-icon fab fa-rocketchat"
  ></i>,
    icon6: <LockIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon7:  <i
    aria-hidden="true"
    class="elementkit-infobox-icon fas fa-users-cog"
  ></i>,
    icon8:   <SearchIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
  };
  const title = {
    title1: " Professionally and Technically Equipped Experts     ",
    title2: " App Store Submission   ",
    title3: " Cost Effective Solutions",
    title4: "IP Rights Protection",
    title5: " Flexible Engagements ",
    title6: "     Enhanced Security System  ",
    title7: " Post Launch Maintenance ",
    title8: "   Complete Transparency   ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_mobile = () => {
  // icons //
  const icon = {
    icon1: <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>,
    icon2: <ShopIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon3: <PaidIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon4:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
    icon5: <DescriptionIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon6: <i class="fa-solid fa-pen-ruler"></i>,
    icon7:  <i
    aria-hidden="true"
    class="elementkit-infobox-icon fas fa-pencil-alt"
  ></i>,
    icon8: <i class="fa-solid fa-medal"></i>,
  };
  const title = {
    title1: " Experienced App developers  ",
    title2: " Play Store Submission ",
    title3: " Cost Effective Solutions",
    title4: "IP Rights Protection",
    title5: "  Multi-Platform Development  ",
    title6: "Creative UI/UX Design  ",
    title7: " Post Launch Maintenance ",
    title8: "  Quality Assurance ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_reactnative = () => {
  // icons //
  const icon = {
    icon1: <FindInPageIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon2: <i class="fa-brands fa-app-store-ios"
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  ></i>, 
    icon3: <AlarmOnIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon4: <i class="fa-solid fa-pen-ruler" style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    ></i>,
    icon5: <TextsmsIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon6:  <LockIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon7: <SettingsSuggestIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon8: <AppsIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
  };
  const title = {
    title1: " Thorough Analysis & research   ",
    title2: "    App Store Optimization ",
    title3: " High Performance &amp; Speed   ",
    title4: "  Appealing UI/UX Design ",
    title5: "     Easy Communication  ",
    title6: " Security & Scalability ",
    title7: "  Support &Maintenance     ",
    title8: "  Advanced Feature-Rich App     ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}

export const Why_To_Choose_webapp = () => {
  // icons //
  const icon = {
    icon1: <i class="fa-solid fa-diamond" style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}></i>,
    icon2:  <i class="fa-solid fa-users-rectangle" style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}></i>,
    icon3: <ViewInArIcon   style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon4:  <PaidIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon5: <GroupsIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon6:  <CollectionsIcon  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
   
  };
  const title = {
    title1: "  Agile Approach for Development ",
    title2: " Enhanced Customer Experience  ",
    title3: "Wide Technology Expertise    ",
    title4: "Cost Effective Solutions",
    title5: "  Experienced & Skilled Development Team  ",
    title6: " Domain Expertise Holdings ",
 
  };
    return <Why_To_Choose_3col icon={icon} title={title} />
}
export const Why_To_Choose_webdesigning = () => {
  // icons //
  const icon = {
    icon1: <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>,
    icon2:  <PaidIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
    icon3: <ViewInArIcon   style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
    />,
    icon4: <i class="fa-solid fa-users-rectangle" style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}></i>,
    icon5: <i class="fa-regular fa-handshake"  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}></i>,
    icon6:   <SearchIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
  };
  const title = {
    title1: " Experienced and Highly Skilled Designers ",
    title2: "Cost Effective Solutions",
    title3: " Leverage New Tools & Technologies   ",
    title4: "       Customer Satisfaction  ",
    title5: " Flexible Engagement Models      ",
    title6: "   Integrity & Transparency   ",
  };
    return <Why_To_Choose_3col icon={icon} title={title} />
}
export const Why_To_Choose_webdevelopment = () => {
  // icons //
  const icon = {
    icon1:   <i class="fa-brands fa-app-store-ios"
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  ></i>, 
    icon2:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
    icon3:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
  icon4: <PaidIcon
  style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
/>,
    icon5: <i
    aria-hidden="true"
    class="elementkit-infobox-icon fab fa-rocketchat"
  ></i>,
    icon6: <LockIcon style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}/>,
    icon7:  <i
    aria-hidden="true"
    class="elementkit-infobox-icon fas fa-users-cog"
  ></i>,
    icon8:   <SearchIcon
    style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
  />,
  };
  const title = {
    title1: " Leverage Latest Technologies    ",
    title2: " Highly Skilled Developers   ",
    title3: "   Timely Project Delivery ",
    title4: " Cost Effective Solutions",
    title5: "   Easy Communication   ",
    title6: "     High Security System  ",
    title7: "  100% Customer Satisfaction     ",
    title8: "   Integrity & Transparency   ",
  };
    return <Why_To_Choose icon={icon} title={title} />
}
