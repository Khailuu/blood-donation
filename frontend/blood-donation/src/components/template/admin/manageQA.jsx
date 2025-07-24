import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  message,
  Modal,
  Form,
  Input,
  Tooltip,
  Popconfirm,
  Space, // 👈 thêm
  Spin,
} from "antd";
import {
  ReloadOutlined,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined, // 👈 thêm
} from "@ant-design/icons";

import { manageServicesQA } from "../../../services/manageServicesQA";

const ManageQA = () => {
  const [qaList, setQaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQA, setSelectedQA] = useState(null);
  const [form] = Form.useForm();

  const fetchQA = async (page = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const res = await manageServicesQA.getQA(page, pageSize);
      const { data } = res.data;
      setQaList(data.items);
      setPagination({
        current: page,
        pageSize,
        total: data.totalItems,
      });
    } catch (error) {
      message.error("Failed to load QA data!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQA(pagination.current, pagination.pageSize);
  }, []);

  // 👉 columns
  const columns = [
    {
      title: "No.",
      key: "index",
      render: (_, __, index) =>
        (pagination.current - 1) * pagination.pageSize + index + 1,
      width: "5%",
    },
    {
      title: "Question Content",
      dataIndex: "content",
      key: "content",
      width: "45%",
    },
    {
      title: "Answer",
      key: "answer",
      render: (_, record) => {
        const comments = record.comments;
        if (!comments || comments.length === 0) return null;

        return comments.map((cmt, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <span>- {cmt.content}</span>
            <Tooltip title="Edit">
              <EditOutlined
                style={{ color: "#52c41a", cursor: "pointer" }}
                onClick={() => openEditModal(record, cmt)}
              />
            </Tooltip>
          </div>
        ));
      },
      width: "45%",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const hasComment = record.comments?.length > 0;
        return (
          <Space>
            {/* Answer */}
            <Tooltip title="Answer">
              <CommentOutlined
                style={{ cursor: "pointer", color: "#1890ff" }}
                onClick={() => openAnswerModal(record)}
              />
            </Tooltip>
            {/* Delete – chỉ hiện khi đã có comment */}
            {hasComment && (
              <Popconfirm
                title="Are you sure to delete this answer?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => handleDelete(record)}
              >
                <Tooltip title="Delete">
                  <DeleteOutlined
                    style={{ cursor: "pointer", color: "#ff4d4f" }}
                  />
                </Tooltip>
              </Popconfirm>
            )}
          </Space>
        );
      },
      width: "5%",
    },
  ];

  const openAnswerModal = (qa) => {
    setSelectedQA(qa);
    form.resetFields();
    setIsModalOpen(true);
  };

  const openEditModal = (qa, comment) => {
    setSelectedQA({
      qa,
      id: comment.answerId,
      mode: "edit",
    });
    console.log(comment.answerId);
    form.setFieldsValue({ id: comment.answerId, answer: comment.content });
    setIsModalOpen(true);
  };
  const handleSubmitPost = async (values) => {
    try {
      const payload = {
        questtionId: selectedQA?.id,
        content: values.answer,
      };

      await manageServicesQA.postAnswer(payload);
      message.success("Answer submitted successfully!");
      setIsModalOpen(false);
      fetchQA(pagination.current, pagination.pageSize);
    } catch (error) {
      message.error("Failed to submit the answer.");
    }
  };

  const handleSubmitPut = async (values) => {
    try {
      const payload = {
        id: selectedQA?.id, // Lưu ý: đang truyền qa từ openEditModal
        content: values.answer,
      };
      await manageServicesQA.updateAnswer(payload);
      message.success("Answer updated successfully!");
      setIsModalOpen(false);
      fetchQA(pagination.current, pagination.pageSize);
    } catch (error) {
      message.error("Failed to update the answer.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <Button
          type="default"
          icon={<ReloadOutlined spin={loading} />} // khi loading thì icon sẽ xoay
          onClick={() => fetchQA(pagination.current, pagination.pageSize)}
          style={{
            marginRight: 10,
            fontFamily: "Raleway",
            fontWeight: 600,
            backgroundColor: "#fff",
            color: "#bd0026",
            border: "1px solid #bd0026",
            borderRadius: 50,
            height: 40,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s",
          }}
        >
          {loading ? (
            <Spin size="small" style={{ marginLeft: 8 }} />
          ) : (
            "Refresh"
          )}
        </Button>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={qaList}
        loading={loading}
        pagination={{
          ...pagination,
          onChange: (page, pageSize) => fetchQA(page, pageSize),
        }}
      />

      <Modal
        title={`Answer to: "${selectedQA?.content}"`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            if (selectedQA?.mode === "edit") {
              handleSubmitPut(values);
            } else {
              handleSubmitPost(values);
            }
          }}
        >
          <Form.Item
            name="answer"
            label="Your Answer"
            rules={[{ required: true, message: "Please input your answer." }]}
          >
            <Input.TextArea rows={4} placeholder="Write your answer here..." />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ManageQA;
