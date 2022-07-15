import React from 'react';
import { isMobile } from "react-device-detect";
import { Box, Heading, Form, TextInput, Button, Text } from "grommet";
import { Link } from "react-router-dom";

const LogIn = ({ submitHandler, value, setValue }) => {
  return (
    <Box
      style={{
        backgroundColor: "#E6E6E6",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        borderColor: "red",
        minWidth: isMobile ? "300px" : "450px",
        minHeight: isMobile ? "300px" : "680px",
        marginTop: "50px",
        marginBottom: "50px",
        borderRadius: "10px",
      }}
    >
      <Heading style={{ fontFamily: "sans-serif" }} level="2" margin="none" gap='medium'>
        Login
      </Heading>
      <Form
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onSubmit={submitHandler}
        style={{ minWidth: "250px" }}
      >
        <Box direction="column" gap="medium">
          <Box>
            <Text style={{ fontFamily: "sans-serif" }}>Email</Text>
            <TextInput
              plain
              style={{
                fontFamily: "sans-serif",
                backgroundColor: "lightgrey",
                fontWeight: "normal",
              }}
              required
              placeholder="Email Adress"
              type="email"
              name="email"
            />
          </Box>
          <Box>
            <Text style={{ fontFamily: "sans-serif" }}>Username</Text>
            <TextInput
              plain
              style={{
                fontFamily: "sans-serif",
                backgroundColor: "lightgrey",
                fontWeight: "normal",
              }}
              required
              placeholder="Username"
              type="text"
              name="username"
            />
          </Box>
          <Box direction="row" gap="large">
            <Button
              color="status-ok"
              type="submit"
              primary
              label="LogIn"
              style={{ fontFamily: "sans-serif" }}
            />
            <Button
              style={{ fontFamily: "sans-serif" }}
              color="status-ok"
              type="reset"
              label="Reset"
            />
          </Box>
        </Box>
      </Form>
    </Box>
  );
}

export default LogIn
