import styled, { css } from 'styled-components';
import { MdPanoramaFishEye, MdClear } from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 30%;
  background: white;
  margin-left: 20px;
  margin-top: 20px;
`;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

export const Options = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100px;
  height: 20px;
  background: gray;
`;

export const IconOption = css`
  width: 30px;
  height: 20px;
`;

export const XIcon = styled(MdClear)`
  ${IconOption}
`;

export const OIcon = styled(MdPanoramaFishEye)`
  ${IconOption}
`;