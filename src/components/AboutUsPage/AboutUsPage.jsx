import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUsPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Title>About Us</Title>
            <Paragraph>
                Welcome to our About Us page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                ...
            </Paragraph>

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Our goal" bordered={false}>
                        <Paragraph>
                            Our mission is to provide high-quality products and excellent customer service.
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Our adventages" bordered={false}>
                        <Paragraph>
                            Our vision is to become a leader in the industry and make a positive impact on society.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUsPage;
