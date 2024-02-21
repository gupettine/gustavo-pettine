import { Container, Title, Main, Category, CategoryTitle, List, Item } from './styles';

export function Skills({ title }) {

  const skillsData = [
    {
      title: 'Programming',
      skills: ['JavaScript,', 'TypeScript,', 'Node.js,', 'Python,', 'Java,', 'C,', 'C++,', 'LaTeX'],
    },
  
    {
      title: 'Backend',
      skills: ['REST API,', 'Express,', 'Knex,', 'MySQL,', 'PostgreSQL,', 'SQLite,', 'MongoDB'],
    },
  
    {
      title: 'Frontend',
      skills: ['React,', 'HTML5,', 'CSS,', 'Bootstrap'],
    },
  
    {
      title: 'DevOps',
      skills: ['Docker,', 'Cloudflare Pages'],
    },
  
    {
      title: 'Design',
      skills: ['Figma'],
    },
  
    {
      title: 'Languages',
      skills: ['Brazilian Portuguese,', 'English'],
    },
  ];

  return (

    <Container>

      <Title>{title}</Title>

      <Main>

        {skillsData.map((category, index) => (
          <Category key={index}>

            <CategoryTitle>{category.title}</CategoryTitle>

            <List>
              {category.skills.map((skill, skillIndex) => (
                <Item key={skillIndex}>{skill}</Item>
              ))}
            </List>

          </Category>
        ))}

      </Main>

    </Container>
      
  );
}