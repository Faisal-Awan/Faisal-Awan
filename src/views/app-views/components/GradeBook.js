import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Semester',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Course',
    dataIndex: 'age',
    key: 'age',
  },
//   {
//     title: 'Title',
//     dataIndex: 'address',
//     key: 'address',
//   },
  {
    title: 'Grade Point',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
];
const data = [
  {
    key: '1',
    name: 'Semester 1',
    age: 6,
    address: '3.1',
    percentage: '80%',
    grade: 'B',
  },
  {
    key: '2',
    name: 'JSemester 2',
    age: 6,
    address: '2.17',
    percentage: '75%',
    grade: 'C',
  },
  {
    key: '3',
    name: 'Semester 3',
    age: 6,
    address: '2.75',
    percentage: '75%',
    grade: 'C',
  },
  {
    key: '4',
    name: 'Semester 4',
    age: 6,
    address: '3.1',
    percentage: '80%',
    grade: 'B',
  },
  {
    key: '5',
    name: 'Semester 5',
    age: 6,
    address: '2.17',
    percentage: '75%',
    grade: 'C',
  },
  {
    key: '6',
    name: 'Semester 6',
    age: 6,
    address: '2.75',
    percentage: '75%',
    grade: 'C',
  },
  {
    key: '7',
    name: 'Semester 7',
    age: 6,
    address: '3.1',
    percentage: '80%',
    grade: 'B',
  },
  {
    key: '7',
    name: 'Semester 8',
    age: 6,
    address: '3.1',
    percentage: '80%',
    grade: 'B',
  }

];
const GradeBook = () => <Table columns={columns} dataSource={data} />;
export default GradeBook;