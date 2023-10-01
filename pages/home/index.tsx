import React, { useEffect, useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetServerSideProps } from "next";

import { useTranslation } from "next-i18next";

import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Popconfirm,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
import BoxCardStyle from "@/component/BoxCardStyle";
import LayoutStyle from "@/component/LayoutStyle";
import TitleStyle from "@/component/TitleStyle";
import HomePage from "@/component/HomePageStyle";
import { masterData } from "@/component/master-data/master-date";
import BoxCardTableStyle from "@/component/BoxCardTableStyle";
import Table, { ColumnsType } from "antd/es/table";

import { useDispatch, useSelector } from "react-redux";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { addUser, removeUser } from "@/redux/reducers/homeSlice/homeSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import form from "antd/es/form";

interface DataType {
  key: React.Key;
  name: string;
  // sex: string;
  // phoneNumber: number;
  // nationality: string;
  // manage: any;
  children?: DataType[];
}

const dataTest = [
  {
    key: "1",
    name: "John",
    sex: "ชาย",
    phoneNumber: Number("0987654321"),
    nationality: "ไทย",
  },
  {
    key: "2",
    name: "Doe",
    sex: "หญิง",
    phoneNumber: Number("0987654321"),
    nationality: "ลาว",
  },
  {
    key: "3",
    name: "Smith",
    sex: "หญิง",
    phoneNumber: Number("0988888888"),
    nationality: "ลาว",
  },
];

const Home = () => {
  const { t } = useTranslation(["common"]);

  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: "0",
      name: "John Brown sr.",
      // sex: "ชาย",
      // phoneNumber: Number("0987654321"),
      // nationality: "ไทย",
    },
    {
      key: "1",
      name: "Edward King",
      // sex: "หญิง",
      // phoneNumber: Number("0987654321"),
      // nationality: "ลาว",
    },
  ]);

  // const handleDelete = (key: React.Key) => {
  //   const newData = dataSource.filter((item: any) => item.key !== key);
  //   setDataSource(newData);
  // };

  const columns: ColumnsType<DataType> = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.name - b.name,
      width: "200px",
    },
    {
      title: "เพศ",
      dataIndex: "sex",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.sex - b.sex,
    },
    {
      title: "หมายเลขโทรศัพท์มือถือ",
      dataIndex: "phoneNumber",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.phoneNumber - b.phoneNumber,
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.nationality - b.nationality,
    },
    {
      title: "จัดการ",
      dataIndex: "manage",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.manage - b.manage,
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            // onConfirm={() => handleDelete(record.key)}
          >
            <Tooltip title="Delete">
              <DeleteOutlined />
            </Tooltip>
            {/* <Tooltip title="Edit"> */}
            {/* <EditOutlined /> */}
            {/* <a>Edit</a> */}
            {/* </Tooltip> */}
          </Popconfirm>
        ) : null,
    },
  ];

  // const userData = useSelector((data) => data.userData.users);
  const userDataTest: any = useSelector((data) => data);
  const dispatch = useDispatch();

  const [name, setName]: any = useState([]);

  const addUserName = () => {
    dispatch(addUser(name));
    console.log("name : ", name);
  };

  // Save
  const submit: SubmitHandler<any> = (data: any) => {
    addUserName();
  };

  const [value, setValue] = useState(1);

  const dateFormat = "MM/DD/YYYY";

  const onChange: DatePickerProps["onChange"] = (
    date: any,
    dateString: any
  ) => {
    console.log(date, dateString);
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // select all บนตาราง
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRowKeys(dataTest.map((item: any) => item.key));
    } else {
      setSelectedRowKeys([]);
    }
  };

  // select ในตาราง
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
      setSelectAll(selectedKeys.length === dataTest.length);
    },
  };

  const method = useForm<any>({});

  const { handleSubmit, reset } = method;

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
    console.log("onReset");
  };

  

  const getData = Array.from(name)?.map((item: any) => {
    return item;
  });

  return (
    <>
      <LayoutStyle>
        <TitleStyle titleName={t("common:title")} changeLanguage />
        <HomePage />
        <FormProvider {...method}>
          <Form form={form} onFinish={handleSubmit(submit)}>
            <BoxCardStyle>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Form.Item
                    name="word"
                    label={`${t("common:word.word")} : `}
                    required
                  >
                    <Select
                      style={{ width: 120 }}
                      options={masterData.word.map((item) => {
                        return {
                          value: item.value,
                          label: t(item.label),
                        };
                      })}
                      placeholder={t("common:word.word")}
                    />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    name="firstName"
                    label={`${t("common:word.first_name")} : `}
                    required
                  >
                    <Input onChange={(e) => setName(e.target.value)} />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    name="lastName"
                    label={`${t("common:word.last_name")} : `}
                    required
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={7}>
                  <Form.Item
                    name="birthday"
                    label={`${t("common:word.birthday")} : `}
                    required
                  >
                    <DatePicker
                      onChange={onChange}
                      placeholder="เดือน/วัน/ปี"
                      format={dateFormat}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="nationality"
                    label={`${t("common:word.nationality")} : `}
                    required
                  >
                    <Select
                      style={{ width: 330 }}
                      options={masterData.nationality.map((item) => {
                        return {
                          value: item.value,
                          label: t(item.label),
                        };
                      })}
                      placeholder={t("common:word.nationality")}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="idCardNumber"
                    label={`${t("common:word.id_card_number")} : `}
                    // required
                  >
                    <Input type="number" style={{ width: 80 }} />
                    {" - "}
                    <Input type="number" style={{ width: 120 }} />
                    {" - "}
                    <Input type="number" style={{ width: 120 }} />
                    {" - "}
                    <Input type="number" style={{ width: 100 }} />
                    {" - "}
                    <Input type="number" style={{ width: 80 }} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="sex"
                    label={`${t("common:word.sex")} : `}
                    required
                  >
                    <Radio.Group onChange={onChangeRadio} value={value}>
                      <Radio value={t("common:word.man")}>
                        {t("common:word.man")}
                      </Radio>
                      <Radio value={t("common:word.woman")}>
                        {t("common:word.woman")}
                      </Radio>
                      <Radio value={t("common:word.not_specified")}>
                        {t("common:word.not_specified")}
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="leadingNumber"
                    label={`${t("common:word.phone_number")} : `}
                    required
                  >
                    <Space.Compact>
                      <Select
                        style={{ width: 150 }}
                        options={masterData.phone.map((item) => {
                          return {
                            value: item.value,
                            label: t(item.label),
                          };
                        })}
                      />
                      <Col span={8}>
                        <Input style={{ width: 300 }} />
                      </Col>
                    </Space.Compact>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="passport"
                    style={{ width: 400 }}
                    label={`${t("common:word.passport")} : `}
                    // required
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={15}>
                  <Form.Item
                    name="expectedSalary"
                    style={{ width: 400 }}
                    label={`${t("common:word.expected_salary")} : `}
                    required
                  >
                    <Input placeholder="" type="number" id="expectedSalary" />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Button
                    htmlType="button"
                    onClick={() => {
                      onReset();
                    }}
                    style={{
                      minWidth: "100px",
                      textAlign: "center",
                    }}
                  >
                    {t("common:word.clear_data")}
                  </Button>
                </Col>
                <Col span={3}>
                  <Button
                    htmlType="submit"
                    style={{
                      minWidth: "100px",
                      textAlign: "center",
                    }}
                    // onClick={() => {
                    //   addUserName();
                    // }}
                  >
                    {t("common:word.send_data")}
                  </Button>
                </Col>
              </Row>
            </BoxCardStyle>
          </Form>
        </FormProvider>
        <BoxCardTableStyle>
          <div style={{ padding: "10px 100px 0 100px" }}>
            <div style={{ marginBottom: "10px" }}>
              <Checkbox
                onChange={(e) => handleSelectAll(e.target.checked)}
                checked={selectAll}
              >
                {t("common:word.select_all")}
              </Checkbox>
              <Button
                style={{
                  minWidth: "100px",
                  textAlign: "center",
                }}
                // onClick={() => handleDeleteData(data)}
                // onClick={() => removeUser(record.id)}
              >
                {t("common:word.delete_data")}
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={dataTest.map((item: any) => item)}
              // dataSource={name?.map((item: any) => item)}
              rowSelection={rowSelection}
            />
          </div>
        </BoxCardTableStyle>
      </LayoutStyle>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
