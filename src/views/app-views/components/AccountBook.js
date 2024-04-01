import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Challan No.',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Payable',
    dataIndex: 'age',
    key: 'age',
  },
//   {
//     title: 'Title',
//     dataIndex: 'address',
//     key: 'address',
//   },
  {
    title: 'Paid',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Date',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Action',
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
    name: '7038090',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-11-2020',
  },
  {
    key: '2',
    name: '7038091',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-05-2021',
  },
  {
    key: '3',
    name: '7038092',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-11-2021',
  },
  {
    key: '4',
    name: '7038093',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-05-2022',
  },
  {
    key: '5',
    name: '7038094',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-11-2022',
  },
  {
    key: '6',
    name: '7038095',
    age: 9000,
    address: '9000',
    percentage: 'Paid',
    grade: '10-05-2023',
  },
  {
    key: '7',
    name: '7038096',
    age: 9000,
    address: '9000',
    percentage: 'Un-Paid',
    grade: '10-11-2023',
  },
  {
    key: '7',
    name: '7038097',
    age: 9000,
    address: '9000',
    percentage: 'Un-Paid',
    grade: '10-05-2024',
  }

];
const AccountBook = () => <Table columns={columns} dataSource={data} />;
export default AccountBook;