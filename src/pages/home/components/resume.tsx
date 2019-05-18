import glamorous from 'glamorous';
import * as React from 'react';
import {IResumeItem} from '../../../models';
import {media} from '../../../utils/styleUtils';

const Holder = glamorous.div({
  flexDirection: 'column'
});

const ResumeItem = glamorous.div({
  margin: '10px 0',
  padding: '15px',
  backgroundColor: 'white',
  display: 'grid',
  gridTemplateAreas: `
        "title title duration"
        "company . ."
        "details details details"
    `,
  gridTemplateColumns: `auto`,
  gridTemplateRows: `1fr .5fr auto`,
  [media.phone]: {
    gridTemplateAreas: `
            "title"
            "duration"
            "company"
            "details"
        `,
    gridTemplateColumns: `1fr`,
    gridTemplateRows: `1fr`
  }
});

const Title = glamorous.div({
  gridArea: 'title',
  fontWeight: 'bold'
});
const Company = glamorous.div({
  gridArea: 'company'
});
const CompanyName = glamorous.a({
  fontStyle: 'italic'
});
const Consultant = glamorous.span({
  ':before': {
    content: '-',
    margin: '0 5px'
  }
});

const Duration = glamorous.div({
  gridArea: 'duration',
  justifySelf: 'end',
  [media.phone]: {
    justifySelf: 'start'
  }
});
const Details = glamorous.ul({
  gridArea: 'details',
  paddingLeft: 20
});
const Detail = glamorous.li({
  lineHeight: '1.9rem'
});

export let Resume: React.SFC<{resume: IResumeItem[]}> = ({resume}) => {
  return (
    <Holder>
      {resume.map(r => (
        <ResumeItem key={r.company}>
          <Title>{r.title}</Title>
          <Company>
            <CompanyName href={r.url}>{r.company}</CompanyName>
            {r.contractor && <Consultant>Consultant</Consultant>}
          </Company>
          <Duration>
            {r.startDate} - {r.endDate}
          </Duration>
          <Details>
            {r.details.map(d => (
              <Detail key={d}>{d}</Detail>
            ))}
          </Details>
        </ResumeItem>
      ))}
    </Holder>
  );
};
