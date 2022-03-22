import React, { createRef, PureComponent, ReactNode, RefObject } from 'react'
import { ValueGroup, Text, Box } from '@adminjs/design-system'
import { EditPropertyProps } from '../base-property-props'

class Show extends PureComponent<EditPropertyProps> {
  private contentRef: RefObject<any>

  constructor(props: EditPropertyProps) {
    super(props)
    this.contentRef = createRef()
  }

  componentDidMount(): void {
    const { property, record } = this.props
    const value = record.params[property.path]
    this.contentRef.current.innerHTML = value
  }

  render(): ReactNode {
    const { property } = this.props
    return (
      <ValueGroup label={property.label}>
        <Box py="xl" px={['0', 'xl']} border="default">
          <Text ref={this.contentRef} />
        </Box>
      </ValueGroup>
    )
  }
}

export default Show
