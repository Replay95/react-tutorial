import styled from "styled-components";
import { Modal } from "./components/modal";
import { Button } from "./components/button";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export function FormModal({ confirm, cancel }) {
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
}
