import styled from "styled-components";
import { ThemeProps } from "../../../pages/_app";

export const StyledParentComponent = styled.main(() => {
	return `
    display: flex;
    height: 100vh;
  `;
});

export const StyledConversationList = styled.section((props) => {
	const {
		theme: { colors },
	} = props;

	return `
    dispaly: flex;
    flex-direction: column;
    background-color: ${colors.quinary};
    min-width: 350px;
    .conversation-list-content {
      overflow-y: auto;
      flex: 1;
    }
    @media only screen and (max-width: 1060px) {
      min-width: initial;
      width: 70px;
    }
  `;
});

export const StyledConversationListHeader = styled.div((props) => {
	const theme: ThemeProps = props.theme;

	return `
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid ${theme.colors.primary};
    .contact-button {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      padding: 0 10px;
      .contact-name {
        color: ${theme.colors.septenary};
        margin-left: 5px;
        font-weight: 600;
      }
    }
  `;
});

export const StyleModalBox = styled.div((props) => {
	const theme: ThemeProps = props.theme;

	return `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    z-index: 10000000;
    background-color: #00000030;
    display: flex;
    align-items: center;
    padding: 30px;
    justify-content: center;
    .modal-content {
      background-color: ${theme.colors.quinary};
      border-radius: 5px;
      width: 300px;
      flex: 1;
    }
  `;
});

export const StyledConversationDetails = styled.section(() => {
	return `
    margin-left: 1px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;
});

export const StyledConversationItem = styled.section<{
	image: string;
	isActive?: boolean;
}>(({ image, theme, isActive }) => {
	return `
    display: flex;
    padding: 10px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #73849513;
    }
    ${isActive ? `background-color: ${theme.colors.secondary} !important;` : ""}
    .conversation-image {
      background-image: url(${image});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .conversation-content {
      margin-left: 10px;
      flex: 1;
      .conversation-content-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        .conversation-title {
          color: ${theme.colors.tertiary};
        }
        .conversation-time {
          color: ${isActive ? theme.colors.tertiary : theme.colors.quaternary};
          font-size: .85rem;
        }
      }
      .conversation-content-body {
        p {
          color: ${isActive ? theme.colors.tertiary : theme.colors.quaternary};
          font-size: .9rem;
        }
      }
    }

    @media only screen and (max-width: 1060px) {
      .conversation-content {
        display: none;
      }
    }
  `;
});

export const StyledNoChat = styled.div(({ theme }) => {
	return `
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h4 {
      color: ${theme.colors.tertiary};
      background-color: #3E546A34;
      padding: 3px 10px;
      font-weight: 600;
      font-size: .85rem;
      border-radius: 20px;
    }
  `;
});

export const StyledConversationBox = styled.div(() => {
	return `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
    overflow-y: auto;
  `;
});

export const StyledChatItem = styled.div<{ isMine?: boolean }>((props) => {
	const theme: ThemeProps = props.theme;
	const { isMine } = props;

	return `
    display: flex;
    align-items: flex-end;
    align-self: ${isMine ? "flex-end" : "flex-start"};
    max-width: 50%;
    margin: 5px 15px;
    background-color: ${isMine ? theme.colors.secondary : theme.colors.quinary};
    padding: 5px 8px;
    border-radius: 6px;
    p {
      color: ${theme.colors.tertiary};
      font-size: .9rem;
    }
    .chat-item-time {
      color: ${isMine ? theme.colors.septenary : theme.colors.quaternary};
      font-size: .85rem;
      margin-left: 10px;
    }

    
    @media only screen and (max-width: 1250px) {
      max-width: 63%;
    }
    
    @media only screen and (max-width: 1060px) {
      max-width: 80%;
    }


    @media only screen and (max-width: 600px) {
      max-width: 100%;
    }
  `;
});

export const StyledConversationForm = styled.form((props) => {
	const theme: ThemeProps = props.theme;

	return `
    display: flex;
    align-items: center;
    background-color: ${theme.colors.quinary};
    padding: 0 15px;
    height: 45px;
    input {
      flex: 1;
      color: ${theme.colors.tertiary};
      font-size: .9rem;
      height: 100%;
      &::placeholder {
        color: ${theme.colors.quaternary};
        font-size: .9rem;
      }
    }
    button {
      background: transparent;
      display: flex;
      align-items: center;
    }
  `;
});

export const StyledConversationHeader = styled.div((props) => {
	const theme: ThemeProps = props.theme;

	return `
    display: flex;
    align-items: center;
    background-color: ${theme.colors.quinary};
    padding: 0 15px;
    height: 60px;
    cursor: pointer;
    .user-name {
      h4 {
        color: ${theme.colors.tertiary};
      }
      .online-text {
        font-size: .9rem;
        color: ${theme.colors.secondary};
      }
    }
  `;
});
