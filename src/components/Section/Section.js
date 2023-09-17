import { Title, Card } from './Section.styled';

export const Section = ({ title, children }) => (
  <Card>
    <Title>{title}</Title>
    {children}
  </Card>
);
