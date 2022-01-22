import React from 'react';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, Pagination } from 'react-bootstrap';
// API URL
const API_URL = '/api/repositories';
// Pagination properties
const paginationProperties = {
  max: 6,
};

/**
 * Repositories component
 * @param {object} props - Component props
 */
const Repositories = () => {
  // State
  const [repos, setRepos] = React.useState([]);
  const [paginationPages, setPaginationPages] = React.useState([]);
  const [paginationSettings, setPaginationSettings] = React.useState({
    selectedPage: 1,
    start: 0,
    end: 6,
  });

  /**
   * Changes the active pagination page
   * @param {number} selectedPage - Number of the selected page
   */
  const handleChangePagination = selectedPage => {
    const start = (selectedPage - 1) * paginationProperties.max;
    const end = start + 6;
    // Update pagination settings
    setPaginationSettings({ selectedPage, start, end });
  };

  React.useEffect(() => {
    /**
     * Get repositories
     */
    const getRepositories = async () => {
      try {
        const response = await axios.get(API_URL);
        // Calculate pagination
        let pagesArray = [];
        const total = response.data.length / 6;

        const pages = Math.ceil(total);

        // Add to pages array
        for (let index = 0; index < pages; index++) {
          pagesArray.push(index);
        }

        // Update local state
        setPaginationPages(pagesArray);
        setRepos(response.data);

        console.log(total, pages, pagesArray);
      } catch (error) {
        console.error(error);
      }
    };

    getRepositories();
  }, []);

  return (
    <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
      <div className='mb-5'>
        <div id='repositories' className='fake-header' />
        <h2 className='text-center text-primary mb-4 title'>Repositorios</h2>
        <Row>
          {repos.length ? (
            repos
              .filter(
                (item, index) =>
                  index >= paginationSettings.start &&
                  index < paginationSettings.end
              )
              .map((item, index) => {
                return (
                  <Col className='pb-2' lg={6} key={`repository-${index}`}>
                    <div className='custom-card repository rounded'>
                      <p className='name text-primary mb-0'>{item.name}</p>
                      <p className='text-muted mb-0'>{item.full_name}</p>
                      <a
                        className='link text-info'
                        href={item.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.html_url}
                      </a>
                      <p className='mb-0'>{item.description}</p>
                    </div>
                  </Col>
                );
              })
          ) : (
            <p className='w-100 text-center'>No hay repositorios</p>
          )}
        </Row>
        {/* Pagination */}
        <div className='d-flex justify-content-center mt-3'>
          <Pagination className='custom-pagination'>
            {paginationPages.length
              ? paginationPages.map(item => {
                  return (
                    <Pagination.Item
                      key={`pagination-${item}`}
                      active={item + 1 === paginationSettings.selectedPage}
                      onClick={() => handleChangePagination(item + 1)}
                    >
                      {item + 1}
                    </Pagination.Item>
                  );
                })
              : null}
          </Pagination>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Repositories;
