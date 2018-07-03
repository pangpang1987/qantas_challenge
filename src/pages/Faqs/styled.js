import styled from "styled-components";
import media from "utils/media";

export const ViewContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MainSection = styled.section`
  flex: 1;
  padding: 20px;

  ${media.phone`
    padding: 0 10px;
  `};
`;

export const Title = styled.h3`
  line-height: 24px;
  font-size: 20px;
`;
export const Body = styled.div`
  line-height: 20px;
  font-size: 16px;
`;

export const RightPanel = styled.ul`
  margin: 0;
  padding: 20px 10px;
  list-style: none;
  text-align: right;
  width: 200px;
  border-left: 1px solid #cccccc;
  font-size: 18px;

  ${media.phone`
    font-size: 14px;
    padding: 20px 4px;
    width: 120px;
  `};
`;

export const Link = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: #bbb;
  :hover {
    color: #999;
  }
  &.isActive {
    color: #333333;
  }
`;
