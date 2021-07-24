import React from 'react';
import {
  SideBarDiv,
  SideBarHeader,
  SideBarPhoto,
  PhotoUpDiv,
  PhotoDownDiv,
  NewSearchButton,
  SideBarActions,
  ActionOptions,
} from './SideBarStyles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { sideActions } from '../../data/dash/sideActions';

interface DateOptions {
  weekday: 'long' | 'short' | 'narrow' | undefined;
  year: 'numeric' | '2-digit' | undefined;
  month: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined;
  day: 'numeric' | '2-digit' | undefined;
}

interface SideBarProps {
  session: any;
}

const SideBar = ({ session }: SideBarProps) => {
  const event = new Date();
  const options: DateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const actionsComp = sideActions.map((el: any, index: number) => {
    return (
      <ActionOptions key={index}>
        <p>Logo</p>
        <p>{el.content}</p>
        <IoIosArrowForward />
      </ActionOptions>
    );
  });

  return (
    <SideBarDiv>
      <SideBarHeader>
        <GiHamburgerMenu />
        <p>logo</p>
      </SideBarHeader>
      <SideBarPhoto>
        <PhotoUpDiv>
          <img src={session[0]?.user.image} alt="user image" />
          <p>{session[0]?.user.name}</p>
        </PhotoUpDiv>
        <PhotoDownDiv>
          <p>{event.toLocaleDateString('es-AR', options)}</p>
          <NewSearchButton>
            <AiOutlinePlusCircle />
            Nueva Búsqueda
          </NewSearchButton>
        </PhotoDownDiv>
      </SideBarPhoto>
      <SideBarActions>{actionsComp}</SideBarActions>
    </SideBarDiv>
  );
};

export default SideBar;
